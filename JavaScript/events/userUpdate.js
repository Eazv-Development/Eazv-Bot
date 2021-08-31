const Discord = require("discord.js");

module.exports = async (client, oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    const logEmbed = new Discord.MessageEmbed()
      .setTitle("Logs")
      .setDescription("Name Change")
      .addField("New Name:", newUser.username)
      .addField("Old Name", oldUser.username)
      .setTimestamp()
      .setFooter("ID: " + newUser.id, oldUser.guild.iconURL())
      .setColor("GREEN");

    client.channels.cache.get(client.config.logChannel).send(logEmbed);
  }
};
