const Discord = require("discord.js");

module.exports = async (client, message, args) => {
  const sChannel = message.mentions.channels.first() || message.channel;
  const msg = client.snipes.get(sChannel.id);

  if (!msg) return message.channel.send("No message has been deleted recently");

  const snipeEmbed = new Discord.MessageEmbed()
    .setTitle("Snipe")
    .setColor("RANDOM")
    .addField("Written Message:", msg.content)
    .addField("By:", `${msg.delete.tag}`)
    .addField("Channel", `<#${msg.canal.id}>`)
    .setTimestamp();

  message.channel.send(snipeEmbed);
}
