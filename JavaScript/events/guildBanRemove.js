const Discord = require('discord.js');

module.exports = async (client, guild, user) => { 
    const logEmbed = new Discord.MessageEmbed()
        .setTitle("Log UnBan User")
        .setThumbnail(user.displayAvatarURL({ dynamic: true}))
        .addField("User:", user)
        .setColor("YELLOW")
        .setFooter(`ID: ${user.id}`, guild.iconURL())
        .setTimestamp();

    client.channels.cache.get(client.config.logChannel).send(logEmbed);

}
