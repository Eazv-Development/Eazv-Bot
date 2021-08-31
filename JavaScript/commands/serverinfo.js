const Discord = require("discord.js");

module.exports = async (client, message, args) => {

  const server = message.guild;
  const serverEmbed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField("Region", server.region, true)
    .addField("Created at", server.joinedAt.toDateString(), true)
    .addField("Owner", server.owner.user.tag)
    .addField("Members", server.memberCount, true)
    .setColor("BLUE");

  message.channel.send(serverEmbed);
}
