const Discord = require ('discord.js');
const token = process.env.token
var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login('NTM2MjAyMDA3MDExMTMxMzkz.DyUMvA.1MUbwlFuydq_SaFpMnOrfHloIL0');

bot.on('message', message => {
    if (message.content === "!ping"){
        message.channel.send("Je n'aime pas ce jeu... :eyes:");
        console.log('ping pong');
    }      
    if (message.content === "eyes"){
        message.channel.send(":eyes:")
        console.log("eyes")
    }   
     if (message.content === "Salut"){
     message.channel.send("Bonjour à tous ! Comment allez vous ?")
     console.log("huhu")
    }
    if (message.content === "t'aime Benoit ?"){
        message.channel.send("Jcrois ouais")
        console.log("huhu")
       }
})
