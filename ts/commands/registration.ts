import argument from './argumentInt';
import { reg_channel, test_channel } from '../config.json';

export default function(obj: argument): void {
  const { args, message } = obj;
  const readyArgs: string[] = args.join('').split('/');
  if (message.channel.name.toLowerCase() === reg_channel || message.channel.name.toLowerCase() === test_channel ) {
    if (args.length === 0) {
      message.reply('Для того, чтобы зарегестрироваться, необходимо ввести комманду со следующими аргументами');
      message.reply('!reg <название-государства>/<цвет-в-формате-hex>/<форма-правления>');
      message.reply('Название: если вы хотите, чтобы название вашего государства состояло из нескольких слов, укажите их через знак черты "-"');
      message.reply('Цвет: цвет задается шестью символами. ');
      message.reply('Форма правления: всего две опции "dem" и "tol"');
    }
    else if(readyArgs.length === 3){
      let readyName: string;
      const [name, color, syst] = readyArgs;
      if([...name].length > 0 && ([...color].length === 7 && color.includes('#') || [...color].length === 6 && !color.includes('#')) && ( syst === 'dem' || syst === 'tol' )) {
        readyName = name.split('-').join(' ');
        message.react('✅');
        message.reply(`Ваш профиль:\nНазвание: ${readyName}\nЦвет: ${color}\nФорма правления: ${syst === 'dem' ? 'демократия' : 'тоталитаризм'}\n\nЕсли вы допустили ошибку при регистрации, зарегестрируйтесь еще раз`);
      }
      else {
        message.react('⛔');
        message.reply('Данные введены неверно. Для помощи введите команду "!reg"');
      }
    }
    else {
      message.react('⛔');
      message.reply('Вы ввели не все данные');
    }
  }
}