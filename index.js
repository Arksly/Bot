const Discord = require ('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login(process.env.token);


bot.on('message', message => {
    if (message.content === "code 5"){
        message.channel.send("https://tenor.com/view/lordoftherings-onering-saurons-finger-lotr-ring-gif-4724582");
        console.log('ping pong');
    }
    if (message.content === "test"){
    bot.channels.get('536277535236030484').send("c'est un test")
    }    
    if (message.content === "eyes"){
        message.channel.send(":eyes:")
        console.log("eyes")
    }   
     if (message.content === "Salut"){
     message.channel.send("Bonjour à tous ! Comment allez vous ?")
     console.log("huhu")
    }
     if (message.content === "bien et toi ?"){
        message.channel.send("Jcrois ouais")
        console.log("huhu")
    }
     if (message.content === "enigmbox"){  
        message.channel.send("un jeu génial")
        console.log("message")
    }
     if (message.content === "lol"){
        message.channel.send("Toutes mes félicitations Paladin ! :clap: :crossed_swords:")
        console.log("réussi")
    }
    if (message.content === "..."){  
       message.channel.send("tu vas bien Down ?")
       console.log("message")
    }
})
