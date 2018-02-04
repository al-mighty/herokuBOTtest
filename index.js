const telegramBot = require('node-telegram-bot-api');

const TOKEN = '507958990:AAG-p27Ciz9Y4HjWmudFDBhrUsC4PHtHO0A';


const bot = new telegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `hello from heroku, bot says : "hi, ${msg.from.first_name}"`);

})