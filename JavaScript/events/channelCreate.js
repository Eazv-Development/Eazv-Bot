const Discord = require('discord.js');

module.exports = async (client, channel) => {

    if(channel.type === "dm") return;

    const logEmbed = new Discord.MessageEmbed()
        .setTitle("Log Channel Create")
        .addField("Channel Name:", channel.name)
        .setColor("GREEN")
        .setFooter(`ID: ${channel.id}`, channel.guild.iconURL())
        .setTimestamp();

    client.channels.cache.get(client.config.logChannel).send(logEmbed);

}
