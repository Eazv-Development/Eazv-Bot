const Discord = require('discord.js');

module.exports = async (client, channel) => { 
    const logEmbed = new Discord.MessageEmbed()
        .setTitle("Log Channel Delete")
        .addField("Channel Name:", channel.name)
        .setColor("RED")
        .setFooter(`ID: ${channel.id}`, channel.guild.iconURL())
        .setTimestamp();

    client.channels.cache.get(client.config.logChannel).send(logEmbed);

}
