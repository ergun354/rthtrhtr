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

**=====          ${client.user.username} Yardım Menüsü          ====**

**═════════════════════════════════════════════════**

**▷ 〔𝟙〕 ➔ p!kullanıcı**

**▷ 〔𝟚〕 ➔ p!eğlence**

**▷ 〔𝟛〕 ➔ p!moderasyon**

**▷ 〔𝟜〕 ➔ p!koruma**
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
    name: 'yardım',
    description:"ToolSAre"
};