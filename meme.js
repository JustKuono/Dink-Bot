const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating memes now...")

    let{body} = await superagent
    .get(`https://api-to.get-a.life/meme`)

     let mEmbed = new Discord.RichEmbed()
     .setColor("#3ecfe6")
     .addField("Memes", "It's time for your favorite kind of autism.")
     .setImage(body.url)

     message.channel.send(mEmbed);

     msg.delete();

}

module.exports.help = {

    name: "meme"

}
