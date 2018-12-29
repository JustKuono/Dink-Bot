const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't mute people silly.");

    let toMute = message.mentions.members.first();
    if(!toMute) return message.channel.send("You didn't specify a user to be unmute -_-");

    let role = message.guild.roles.find(r => r.name === "muted");

    if(!role || !toMute.roles.has(role.id)) return message.channel.send("What is wrong with you? They aren't muted!");

    await toMute.removeRole(role);
    message.channel.send(`<@${toMute.id}> whoop whoop whoop you have been unmuted :3`);

    return;
    


    }
module.exports.help = {
    name: "unmute"
}