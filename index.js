
var bot = require("discord.js");
var client = new bot.Client();

const notifier = require('node-notifier');

client.on("message", message => {
    if(message.author.id === "379265493820899328"){
        if(message.content.startsWith("lol")){
            message.delete(message.author);
            setInterval(function(){message.channel.send("A")}, 1);
        }
    } else if(message.channel.id === "420989611158798349"){
        if(message.author.id === "365975655608745985"){
            if(message.content.includes("```")){
                notifier.notify({
                    title: 'Pok�cord',
                    message: 'Nouveau level : ' + message.content.match(/\d+/g).join('')
                });
            } else if(message.content.includes("moves")){
                notifier.notify({
                    title: 'Pok�cord',
                    message: 'Nouveau moves'
                });
            } else {
                notifier.notify({
                    title: 'Pok�cord',
                    message: 'Nouveau Pok�mon'
                });
            }
        }
    }
});

console.log("ok");

client.login(process.env.TOKEN);
