const Discord = require("discord.js");

module.exports = async (client, role) => {
  const logEmbed = new Discord.MessageEmbed()
    .setTitle("Logs Role Delete")
    .addField("Role Deleted:", role.name)
    .setColor("YELLOW")
    .setFooter(role.guild.name, role.guild.iconURL())
    .setTimestamp();

  client.channels.cache.get(client.config.logChannel).send(logEmbed);
};
