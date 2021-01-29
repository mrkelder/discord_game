import { Client } from 'discord.js';
import { token } from './config.json';
import { green } from 'colors';

const client = new Client();

client.once('ready', () => {
  console.log(green('Bot is ready'));
});

client.on('message', message => {
  if (message.author.bot) return;
});

client.login(token);