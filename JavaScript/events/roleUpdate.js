const Discord = require("discord.js");

module.exports = async (client, oldRole, newRole) => {
  if (oldRole.name !== newRole.name) {
    const logEmbed = new Discord.MessageEmbed()
      .setTitle("Logs Role Update")
      .addField("Old Name:", oldRole.name)
      .addField("Name Role:", newRole.name)
      .setColor(newRole.color || oldRole.name)
      .setFooter(oldRole.guild.name, oldRole.guild.iconURL())
      .setTimestamp()
      .setColor("YELLOW");
    client.channels.cache.get(client.config.logChannel).send(logEmbed);
  }
};
