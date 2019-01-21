const Discord = require ('discord.js');
const bot = new Discord.Client();


bot.login(NTM2MjAyMDA3MDExMTMxMzkz.DyeVQQ.KI9hQ0-X0_bEeUDN4o_GJps81Bk);

bot.on('ready', () => {
    console.log("Bot Ready !");
});

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
