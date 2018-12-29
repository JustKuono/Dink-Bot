const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.slice(1).join(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do player.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, that person can't be kicked.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#fa0c0c")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

  //will send a deprecation to console but sends a formatted message to the user...need to fix.
    
    let kickChannel = message.guild.channels.find(`name`, "bot_shit");
    if(!kickChannel) return message.channel.send("Can't find bot_shit channel.");
    
    const kEmbed = new Discord.RichEmbed()
    .setTitle("It appears you have been kicked from Dinkleberg's Gmod Discord :/")
    .addField("Reason", kReason)
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    kUser.user.send(kEmbed);
    setTimeout(() => kUser.kick(), 2000);
    kickChannel.send(kickEmbed);


}

module.exports.help = {

    name: "kick"
  
  }
