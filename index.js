const Discord = require ('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login(process.env.token);
bot.on('ready', () => { bot.user.setGame('EnigmBox') })

bot.on('message', message => {
    if (message.content === "code 5"){
        message.channel.send("https://tenor.com/view/lordoftherings-onering-saurons-finger-lotr-ring-gif-4724582");
        console.log("ping pong");
    }
    if (message.content === "lol"){
    bot.channels.get('536277535236030484').send("Toutes mes félicitations Paladin ! :clap: :crossed_swords:")
    console.log("test")
    }
    if (message.channel.type == "dm") {
   var message = message.content.toString();
   // We'll send the message back to the author as AN EXAMPLE
   message.author.send(message);
    }
    if (message.content === "eyes"){
        message.channel.send(":eyes:")
        console.log("eyes")
    }   
     if (message.content === "Salut"){
     message.channel.send("Bonjour à tous ! Comment allez vous ?")
     console.log("salut")
    }
     if (message.content === "bien et toi ?"){
        message.channel.send("Jcrois ouais")
        console.log("huhu")
    }
     if (message.content === "enigmbox"){  
        message.channel.send("un jeu génial")
        console.log("message")
    }
     if (message.content === "faya"){
        message.channel.send("Beau")
        console.log("faya")
    }
    if (message.content === "..."){  
       message.channel.send("gnuh uh uh")
       console.log("message")
    }
})
