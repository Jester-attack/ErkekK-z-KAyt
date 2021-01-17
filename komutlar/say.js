const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, prefix, ayar, emoji) => {
  let erkekRolü = "756126746318995468";
  let kızRolü = "756126744649400320";
  let ekipRolü = "756126730258743296";
  const embeddd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setDescription(
      `Taglı Üye: ${message.guild.roles.get(ekipRolü).members.size} \nSes Kanalında Bulunan: ${
        message.guild.members.filter(a => a.voiceChannel).size
      }`
    );
  message.channel.send(embeddd);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sayım yapar.",
  usage: "say",
  kategori: "kullanıcı"
};
