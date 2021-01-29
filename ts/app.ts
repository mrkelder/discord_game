import { Client } from 'discord.js';
import { token, prefix } from './config.json';
import { reg } from './commands/commandManager';
import { green } from 'colors';

const client = new Client();

client.once('ready', () => {
  console.log(green('Bot is ready'));
});

client.on('message', message => {
  if (message.author.bot || message.content === prefix) return;
  else if(message.content.startsWith(prefix)) {
    const args: string[] = message.content.slice(prefix.length).trim().split(/ +/);
    const command: string | undefined = args.shift()?.toLocaleLowerCase();
    switch(command) {
      case 'reg': reg({ args, message }); break;
    }
  }
});

client.login(token);