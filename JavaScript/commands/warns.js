const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (client, message, args) => { 

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Insufficient permissions")

    const member = message.mentions.users.first();
    if(!member) return message.channel.send("Please mention a user");

    let get_warns = db.get(`warns_${member.id}`);

    const logEmbed = new Discord.MessageEmbed()
    .setTitle("Staff Log - Warning information")
    .setThumbnail(member.displayAvatarURL({ dynamic: true}))
    .addField("Total Warns:", get_warns, true)
    .addField("Staff:", message.author, true)
    .addField("ID Target:", member.id, true)
    .addField("Target:", member.tag, true)
    .setFooter(message.guild, message.guild.iconURL())
    .setColor("AQUA")

    message.channel.send(logEmbed);
}
