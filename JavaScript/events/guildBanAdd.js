const Discord = require('discord.js');

module.exports = async (client, guild, user) => { 
    const logEmbed = new Discord.MessageEmbed()
        .setTitle("Log Ban User")
        .setThumbnail(user.displayAvatarURL({ dynamic: true}))
        .addField("User:", user)
        .setColor("RED")
        .setFooter(`ID: ${user.id}`, guild.iconURL())
        .setTimestamp();

    client.channels.cache.get(client.config.logChannel).send(logEmbed);

}
