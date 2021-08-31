const Discord = require("discord.js");

module.exports = async (client, message) => {
  client.snipes = new Map();

  if (message.author.bot) return;
  //if(author.delete.message) return;
  const logEmbed = new Discord.MessageEmbed()
    .setTitle("Logs Message Deleted")
    .addField("Message Deleted:", message.content || none)
    .addField("Usuario:", `<@${message.author.id}>`)
    .setColor("RED")
    .setFooter(message.guild.name, message.guild.iconURL())
    .setTimestamp();
  client.channels.cache.get(client.config.logChannel).send(logEmbed);

  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel,
  });
};
