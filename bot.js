const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602085065605775372")
setInterval(function() {
channel.send(`Fuck`);
}, 30)
})

client.login(process.env.BOT_TOKEN);