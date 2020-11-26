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

**<a:skill:775035540402733066> =====          ${client.user.username} Eğlence Menüsü===== <a:skill:775035540402733066>**

**═════════════════════════════════════════════════**

**▷ ❮ <:imagesremovebgpreview2:775767189726822441> adam-asmaca <:imagesremovebgpreview2:775767189726822441> ❯**
════════════════════
**▷ ❮ <:a3a12a44181d5e7d6befdacf9545c820:775771619616227328> banner <:a3a12a44181d5e7d6befdacf9545c820:775771619616227328> ❯**
════════════════════
**▷ ❮ <:kisspngsilhouettehugdrawingclipa:775769880347148319> sarıl <:kisspngsilhouettehugdrawingclipa:775769880347148319> ❯**
════════════════════
**▷ ❮ <:1169pxAchtung:775770799114158142> wasted <:1169pxAchtung:775770799114158142> ❯**
════════════════════
**▷ ❮ <:images__3_removebgpreview:775768201090170894> pixel <:images__3_removebgpreview:775768201090170894> ❯**
════════════════════
**▷ ❮  <:unnamed:775768663616782337> ateş-et [@kullanıcı] <:unnamed:775768663616782337>  ❯**
════════════════════
**▷ ❮ 🤺 düello [@kullanıcı] 🤺 ❯**

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
    name: 'eğlence',
    description:"ToolSAre"
};