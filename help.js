const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("~Help/Commands~")
    .setColor("#00ff59")
    .setThumbnail(sicon)
    .addField("Prefix", "d!")
    .addField("Server Information", "d!serverinfo")
    .addField("Bot Information", "d!botinfo")
    .addField("Fun Commands", "d!meme for randomly generated autism")
    .addField("Temporary Mute", "d!tempmute @<user> 1s/m/h/d <reason>")
    .addField("Kick", "d!kick @<user> <reason>")
    .addField("Ban", "d!ban @<user> <reason>")
    .addField("Why are reasons needed?", "This allows those who have been kicked/banned to recieve a message in their DMs stating why they were kicked/banned. It can make it easier to discuss appeals as well. ^-^")
    .addField("Version", "Dink Bot is currently running version 1.0.3")
    .addField("New Commands", "At the moment only moderation commands are available until the bot is for sure stable, but if you want to request commands message JustKuono#8763 and I'll look into them and begin writing them ^-^")

    return message.channel.send(serverembed);

}

module.exports.help = {

    name: "help"
  
  }
