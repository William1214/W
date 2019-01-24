const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");

var PrEfix = "!!";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '538122737722458112') return;
if (message.content.startsWith(PrEfix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(PrEfix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(PrEfix + 'p')) {
client.user.setActivity(argresult, {type:'PLAYING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '537968114340724746') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '537969708545343508').send('*Welcome To BubblesAvatar*');
},3000);
});

client.login(process.env.BOT_TOKEN);
