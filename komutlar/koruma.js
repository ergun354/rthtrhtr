const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
let davet = ""//botunuzun davet linki
let destek = ""//destek sunucusu linki
let dbl = ""//botunuz dbl ye ekli ise dbl profil linki
let site = ""//varsa site linki
    const ToolSAre = new Discord.RichEmbed()
   .setColor("RED")
   .setDescription(`

**=====          ${client.user.username} Moderasyon Menüsü=====**

**═════════════════════════════════════════════════**

**▷ Koruma-yönetici** 
════════════════════
**▷ Ban-Limit**
═══════════════════
**▷ Rol-Koruma**

**❗Daha Fazla Komut Eklenecektir❗**

**═════════════════════════════════════════════════**
`)
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(ToolSAre);
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
};
exports.help = {
    name: 'koruma',
    description:"ToolSAre"
};