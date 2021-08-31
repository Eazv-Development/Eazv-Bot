const Discord = require("discord.js");
const client = new Discord.Client({ ws: { intents: 32767 } });

////////////////////////// HANDLER ///////////////////
let { readdirSync } = require("fs");
client.config = require("./config.js");
client.commands = new Discord.Collection();

for (const file of readdirSync("./commands/")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./commands/${file}`);
    
    client.commands.set(fileName, fileContents);
  }
}

for (const file of readdirSync("./events/")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./events/${file}`);
    
    client.on(fileName, fileContents.bind(null, client));
  }
}
////////////////////////// HANDLER ///////////////////

client.login(client.config.token);
