const Discord = require("discord.js");

module.exports = async (client, oldMember, newMember) => {
  oldMember.guild.fetchAuditLogs().then((logs) => {
    const userAvatar = logs.entries.first().executor.avatarURL({ dynamic: true });

    if (oldMember.nickname !== newMember.nickname) {
      const logEmbed = new Discord.MessageEmbed()
        .setTitle("Log Nick Changed")
        .setColor("RED")
        .addField("Nick Name Old", oldMember.nickname)
        .addField("Nick Name New", newMember.nickname)
        .setTimestamp()
        .setThumbnail(userAvatar)
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL());

      client.channels.cache.get(client.config.logChannel).send(logEmbed);
    }
  });
};
