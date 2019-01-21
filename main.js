const Discord = require ('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login('NTM2MjAyMDA3MDExMTMxMzkz.DyUMvA.1MUbwlFuydq_SaFpMnOrfHloIL0');

bot.on('message', message => {
    if (message.content === "!ping"){
        message.reply("Je n'aime pas ce jeu... :eyes:");
        console.log('ping pong');
    }    
    if (message.content === "fortnite"){
        message.channel.sendMessage("mauvais jeu")
        console.log("fortnite")
    }  
    if (message.content === "eyes"){
        message.channel.sendMessage(":eyes:")
        console.log("eyes")
    }   
    
     if (message.content === "Salut"){
     message.channel.sendMessage("Bonjour à tous ! Comment allez vous ?")
     console.log("huhu")
    }
});