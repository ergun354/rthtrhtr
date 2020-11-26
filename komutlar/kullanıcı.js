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

**<a:skill:775035540402733066> =====          ${client.user.username} Kullanıcı Menüsü===== <a:skill:775035540402733066>**

**═════════════════════════════════════════════════**

**▷ ❮ <:pngclipartbarchartstatisticscomp:775781994046291978> istatistik <:pngclipartbarchartstatisticscomp:775781994046291978> ❯**
════════════════════
**▷ ❮ <:images:775774094816968745> hava-durumu [Lokasyon] <:images:775774094816968745> ❯**
════════════════════
**▷ ❮ <:imagesremovebgpreview3:775779276393021472> ping <:imagesremovebgpreview3:775779276393021472> ❯**
════════════════════
**▷ ❮ <:pngtransparentcalculatorconfigur:775778616377212978> hesapla [işlem] <:pngtransparentcalculatorconfigur:775778616377212978> ❯**
════════════════════
**▷ ❮ <:googlelogopngsuiteeverythingyoun:775766537721610291> google <:googlelogopngsuiteeverythingyoun:775766537721610291> ❯**
════════════════════
**▷ ❮ <:youtubenlogopng11545514814wzxfob:775779746667692033> youtube [Aratmak İstediğin Şey] <:youtubenlogopng11545514814wzxfob:775779746667692033> ❯**
════════════════════
**▷ ❮ <:pngtreecoronavirusbacteriacellpn:775780245160460298> korona <:pngtreecoronavirusbacteriacellpn:775780245160460298> ❯**

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
    name: 'kullanıcı',
    description:"ToolSAre"
};