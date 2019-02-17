const Discord = require ("discord.js");
const prefix = "d!";

module.exports.run = async (bot, message, args) => {
    let muterole = message.guild.roles.find(r => r.name === 'Muted');
    let serverembed = new Discord.RichEmbed()
    .setDescription("Muted List")
    .setColor("#07fafa")
    .addField("Number of Members", muterole.members.size)
    .addField('Users Muted', muterole.members.map(u => u.user.username).join("\n"))
    message.channel.send(serverembed);
}

module.exports.help = {

    name: "list"

}