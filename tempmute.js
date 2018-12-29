const Discord = require("discord.js")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

//d!tempmute @justkuono test test
   //has a deprecation somewhere, can't find it to fix it

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get[0]);
if(!tomute) return message.reply("Sorry, I couldn't find the user you were trying to mute.");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Whoops, you can't mute them they're too cool.");
let muterole =  message.guild.roles.find(role => role.name === "muted");
   //start of create role
if(!muterole){
  try{
    muterole = await message.guild.createRole({
      name: "muted",
      color: "#000000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
     });
    });
  }catch(e){
    console.log(e.stack);
  }
}   
 //end of create role
 let mutetime = args[1];
 if(!mutetime) return message.reply("You didn't specify a time for the mute. :/");


 await(tomute.addRole(muterole.id));
 message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

 setTimeout(function(){
   tomute.removeRole(muterole.id);
   message.channel.send(`<@${tomute.id}> has been unmuted, don't do anything else stupid.`);
 }, ms(mutetime));


 //end of module
}
module.exports.help = {
    name: "tempmute"
}
