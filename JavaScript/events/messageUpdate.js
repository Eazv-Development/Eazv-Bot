const Discord = require("discord.js");

module.exports = async (client, oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (oldMessage.content === newMessage.content) return;
  const logEmbed = new Discord.MessageEmbed()
    .setTitle("Logs Message Edited")
    .addField("Old Message:", `${oldMessage.content || "No content"}`)
    .addField("New Message:", `${newMessage.content || "No content"}`)
    .addField("User:", `<@${oldMessage.author.id}>`)
    .setColor("YELLOW")
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL());
  client.channels.cache.get(client.config.logChannel).send(logEmbed);
};
