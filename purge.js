const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("suggam deez *blank*.");
    if(!args[0]) return message.channel.send("suggam deez *blank*.");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} weird messages.`).then(msg => msg.delete(2000));
    });


}

module.exports.help = {

    name: "purge"

}