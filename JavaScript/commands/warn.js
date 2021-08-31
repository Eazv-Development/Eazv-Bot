const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (client, message, args) => { 

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Insufficient permissions")

    const member = message.mentions.users.first();
    if(!member) return message.channel.send("Please mention a user");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason";

    const get_warns = db.get(`warns_${member.id}`);

    db.add(`warns_${member.id}`, 1);

    if(get_warns < 5) {

        const embed = new Discord.MessageEmbed()
        .setTitle("Warning information - " + member.tag)
        .setThumbnail(member.displayAvatarURL({ dynamic: true}))
        .addField("Reason:", reason, true)
        .addField("Total Warns:", get_warns + 1, true)
        .addField("Staff:", message.author, true)
        .addField("ID Target:", member.id, true)
        .addField("Target:", member.tag, true)
        .setFooter(message.guild, message.guild.iconURL())
        .setColor("RED")

        message.channel.send(embed);

        const logEmbed = new Discord.MessageEmbed()
        .setTitle("Mod Log - Warn")
        .setThumbnail(member.displayAvatarURL({ dynamic: true}))
        .addField("Reason:", reason, true)
        .addField("Total Warns:", get_warns, true)
        .addField("Staff:", message.author, true)
        .addField("ID Target:", member.id, true)
        .addField("Target:", member.tag, true)
        .setColor("RED")

        client.channels.cache.get(client.config.staffLogChannel).send(logEmbed);

    } else {

        const logEmbed = new Discord.MessageEmbed()
        .setAuthor("Warnings were reinstated")
        .setThumbnail(member.displayAvatarURL({ dynamic: true}))
        .addField("User:", member.tag, true)
        .addField("ID User:", member.id, true)
        .setColor("RED")
        client.channels.cache.get(client.config.staffLogChannel).send(logEmbed);

        message.channel.send("Reached limit of warnings")
        db.set(`warns.${member.id}`, 0)
    }
}
