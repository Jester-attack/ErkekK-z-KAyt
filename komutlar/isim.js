const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.guild.member(message.member.id).roles.has("756126718959419473"))
    return message.reply(
      `Bu komutu kullanamazsın ${message.guild.roles.get(
        "756126718959419473"
      )} değilsin.`
    );

  let user =
    message.mentions.users.first() || message.guild.members.get(args[0]);
  let isim = args.slice(1).join(" ");
  let eming = "么 ";
  if (!user)
    return message.channel
      .send("**İsmini Değiştireceğiniz Kişiyi Etiketlemeniz Gerekiyor.**")
      .then(s => s.delete(7000));

  if (!isim)
    return message.channel.send(
      user +
        "Adlı kullanıcıya belirlenecek ismi belirtmen gerekiyor."
    );

  message.guild.member(user.id).setNickname(eming + isim);

  const embed = new Discord.RichEmbed()
    .setDescription("İsim Değiştirme Başarılı")
    .setColor("GREEN")
    .addField("<a:tick1:758704765978542091> İsmi Değiştirilen Üye", user)
    .setTimestamp()
    .addField(`<a:tick1:758704765978542091> Yeni İsmi`, eming + isim)
    .setFooter("Sentinus Register")
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "isim",
  description: "taslak",
  usage: "isim"
};
