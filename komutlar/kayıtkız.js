const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.guild.member(message.member.id).roles.has("756126718959419473"))
    return message.reply(
      `Bu komutu kullanamazsın ${message.guild.roles.get(
        "756126718959419473"
      )} değilsin.`
    );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return message.channel.send("**Verilecek Kişiyi Bulamadım**");
  let member = message.guild.member(kullanıcı);
  let vrol = "756126744649400320";
  let vrol2 = "756126745010372623";
  let arol = "756126748768338051";
  member.addRole(vrol);
  member.addRole(vrol2);
  member.removeRole(arol);

  const embed = new Discord.RichEmbed()
    .setDescription("Kayıt İşlemi Başarılı")
    .setTimestamp()
    .addField("<a:bum:758698648803999745> Kaydedilen Üye", member)
    .setTimestamp()
    .addField(`<a:tick1:758704765978542091>  Verilen Rol`, message.guild.roles.get(vrol))
    .addField(`<a:tick1:758704765978542091>  Verilen Rol`, message.guild.roles.get(vrol2))
    .setTimestamp()
    .addField(`<a:tick3:758704658910019625>   Alınan Rol`, message.guild.roles.get(arol))
    .setFooter("么 Sentinus Register");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};

exports.help = {
  name: "kız",
  description: "taslak",
  usage: "kız"
};
