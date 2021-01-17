const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);

///////////
const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///////////

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "çık") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);
client.on('ready', () => {
    client.user.setPresence({
        game: {
            name: `Sentinus Taglı Alım`,
            type: 'WATCHING'
            // Değerler:
            // PLAYING: Oynuyor
            // WATCHING: İzliyor
            // LISTENING: Dinliyor
        },
        status: 'dnd'
        // Değerler:
        // online: Çevrimiçi
        // dnd: Rahatsız Etmeyin
        // idle: Boşta
    })
})

/////////////////////////////////////
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'tag') {
    msg.channel.sendMessage('么');
  }
});

client.login('NzU4NzAzNTYwODg3MTA3NjQ1.X2yzwA.sKgZQztxcN0HPw9bXzznitBCTA4');
///////////////////////////////////////////////////

client.on("userUpdate", async (oldUser, newUser) => {
if (oldUser.username !== newUser.username) {
let tag = "么"; ///////tag girin
let sunucu = "756125435506589746"; ///////sunucunuzun id
let kanal = "756145551770255490" ///////log tutulcak kanal id
let rol = "756126730258743296"; /////tag aldımı verilmesini istediğiniz rol id
if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.channels.get(kanal).send(`**${newUser} adlı kişi ${tag} tagımızı aldığı için <@&${rol}> rolü verildi !**`)
client.guilds.get(sunucu).members.get(newUser.id).addRole(rol) }
if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
client.channels.get(kanal).send(`**${newUser} adlı kişi ${tag} tagımızı çıkardığı için <@&${rol}> rolü alındı !**`) } } })


///////////////////////////////////////////////////

/////////////////////////////////////////////////////

client.on("guildMemberAdd", (member, message) => {
  if (member.guild.id !== "756125435506589746") return; //sunucu ıd
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let user = client.users.get(member.id);
  require("moment-duration-format");
  let eskiNick = member.user.username;
  const id = "756126831249195088"; //kanal ıd
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (gün < 7) kontrol = "Güvenilir Değil!";
  if (gün > 7) kontrol = "Güvenilir Gözüküyor!";
  channel.send(
    `:tada: Sunucumuza  Hoşgeldin ${member} seninle ${
      member.guild.members.size
    } kişiyiz! <a:tac:758729766114295828> \n\n <a:kalp2:758698995266093076> Tagımızı alarak bizlere destek olabilirsin ! Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor yetkililerimiz seninle ilgilenecektir ! İyi eğlenceler.\n\n <a:night:758704808734621727> Hesap Kuruluş Zamanı: ${moment(
      user.createdAt
    ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
      user.createdAt
    ).format(
      "YYYY HH:mm:ss"
    )} \n\n Bu Kullanıcı: **${kontrol}**\n\n <@&756126718959419473> Rolündeki yetkililer seninle ilgilenecektir.`
  );
});

//////////////////////////////////////////////////////

client.on('ready', ()=>{
client.channels.get('756126838169927680').join()
})
