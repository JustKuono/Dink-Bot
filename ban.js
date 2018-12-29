const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.slice(1).join(" ");
    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send("Stop being rude! They can't be banned!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do player! They can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#831ed6")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "bot_shit");
    if(!banChannel) return message.channel.send("Can't find bot_shit channel.");

    bUser.user.send(bReason);
    setTimeout(() => bUser.ban(), 3000);
    banChannel.send(banEmbed);
}

module.exports.help = {

    name: "ban"
  
  }