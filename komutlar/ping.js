const Discord = require('discord.js');


exports.run = function(client, message) {
  
  
const embed = new Discord.RichEmbed();
  embed.setColor("RED");
 embed.addField(`**💻 Bot Gecikme** `
                
              ,` **⚙${client.ping}**`);

 message.channel.send({embed: embed}); 
  
 

};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['ping','p'], 
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping' 
};