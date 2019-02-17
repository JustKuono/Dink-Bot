const Discord = require ("discord.js");
const prefix = "d!";
const Gamedig = require ("gamedig");
const Minimist = require ("minimist");

module.exports.run = async (bot, message, args) => {
    Gamedig.query({
        type: 'garrysmod',
        host: '64.94.238.134'
    }).then((state) => {
        let serverembed = new Discord.RichEmbed()
        .setDescription("Dinkleberg's PropHunt")
         return message.channel.send(state);
    }).catch((error) => {
        console.log("Cannot find server, offline.");
    });

}

module.exports.help = {

    name: "ph"
    
}
