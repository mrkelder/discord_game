import argument from './argumentInt';
import { reg_channel, test_channel } from '../config.json';
import mongodb from '../packages/mongodb';
import { MessageAttachment } from 'discord.js';
import Canvas from 'canvas';

// FIXME: find out what to put insted of "any" type

export default function(obj: argument): void {
  const { args, message } = obj;
  const readyArgs: string[] = args.join('').split('/');
  if (message.channel.name.toLowerCase() === reg_channel || message.channel.name.toLowerCase() === test_channel) {
    // If users types in the channel for registration or in the testing channel
    if (args.length === 0) {
      // If users only typed "!reg"
      message.reply('Для того, чтобы зарегестрироваться, необходимо ввести комманду со следующими аргументами');
      message.reply('!reg <название-государства>/<цвет-в-формате-hex>/<форма-правления>');
      message.reply('Название: если вы хотите, чтобы название вашего государства состояло из нескольких слов, укажите их через знак черты "-"');
      message.reply('Цвет: цвет задается шестью символами. ');
      message.reply('Форма правления: всего две опции "dem" и "tol"');
    }
    else if (readyArgs.length === 3) {
      // If user typed in all three required arguments
      let readyName: string;
      const [name, color, syst] = readyArgs;
      if ([...name].length > 0 && ([...color].length === 7 && color.includes('#') || [...color].length === 6 && !color.includes('#')) && (syst === 'dem' || syst === 'tol')) {
        // If three typed arguments are correct
        const canvas = Canvas.createCanvas(150, 150);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 150, 150);
        const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        readyName = name.split('-').join(' '); // normalising name
        message.react('✅');
        message.reply(`Ваш профиль:\nНазвание: ${readyName}\n`);
        message.channel.send('Цвет:', attachment);
        message.reply(`Форма правления: ${syst === 'dem' ? 'демократия' : 'тоталитаризм'}`);
        /* eslint-disable-next-line */
        mongodb(async(obj: any) => {
          // Uploading/updating user's data to the database
          const userId: string = message.author.id;
          const { client, db } = obj;
          const availableUsers: string[] = await db.collection('users').find({}).toArray();
          if (availableUsers.length > 0) {
            await db.collection('users').updateOne({ user_id: userId }, { $set: { name, color, syst } });
            message.reply('Информация обновлена');
          }
          else {
            await db.collection('users').insertOne({ user_id: userId, name, color, syst });
            message.reply('Профиль занесен в базу данных');
          }
          client.close();
        });
      }
      else {
        // If users typed in incorrect data
        message.react('⛔');
        message.reply('Данные введены неверно. Для помощи введите команду "!reg"');
      }
    }
    else {
      // If users typed in data incorrectly
      message.react('⛔');
      message.reply('Вы ввели не все данные');
    }
  }
}