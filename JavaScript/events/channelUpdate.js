const Discord = require('discord.js');

module.exports = async (client, oldChannel, newChannel) => { 

    if (oldChannel.name !== newChannel.name) {
        const logEmbed = new Discord.MessageEmbed()
            .setTitle("Log Channel Update")
            .addField("Old Name:", oldChannel.name)
            .addField("New Name:", newChannel.name)
            .setColor("YELLOW")
            .setFooter(newChannel.guild.name, newChannel.guild.iconURL())
            .setTimestamp();

        client.channels.cache.get(client.config.logChannel).send(logEmbed);
    }

    if (oldChannel.nsfw !== newChannel.nsfw) {
        const logEmbed = new Discord.MessageEmbed()
            .setTitle("Log Channel Update")
            .addField(`Channel: **${newChannel.name}**`, "is NSFW: ``" + newChannel.nsfw + "``")
            .setColor("YELLOW")
            .setFooter(newChannel.guild.name, newChannel.guild.iconURL())
            .setTimestamp();

        client.channels.cache.get(client.config.logChannel).send(logEmbed);
    }
}
