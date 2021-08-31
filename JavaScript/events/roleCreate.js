const Discord = require("discord.js");

module.exports = async (client, role) => {
  const logEmbed = new Discord.MessageEmbed()
    .setTitle("Logs Role Create")
    .addField("New Role:", role)
    .setColor("YELLOW")
    .setFooter(role.guild.name, role.guild.iconURL())
    .setTimestamp();

  client.channels.cache.get(client.config.logChannel).send(logEmbed);
};
