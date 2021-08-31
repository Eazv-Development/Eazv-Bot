const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (client, message, args) => { 
	
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Insufficient permissions")

    const member = message.mentions.users.first();
    if(!member) return message.channel.send("Please mention a user");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason";

    let get_warns = db.get(`warns_${member.id}`);

    if(get_warns <= 0) return message.channel.send("No sanctions are currently in place");
    db.set(`warns_${member.id}`, get_warns - 1);

    const embed = new Discord.MessageEmbed()
    .setAuthor("UnWarning information - "+member.tag)
    .setThumbnail(member.displayAvatarURL({ dynamic: true}))
    .addField("Reason:", reason, true)
    .addField("Total Warns:", get_warns - 1, true)
    .addField("Staff:", message.author, true)
    .addField("ID Target:", member.id, true)
    .addField("Target:", member.tag, true)
    .setFooter(message.guild, message.guild.iconURL())
    .setColor("YELLOW")

    message.channel.send(embed);

    const logEmbed = new Discord.MessageEmbed()
    .setTitle("Mod Log - UnWarn")
    .setThumbnail(member.displayAvatarURL({ dynamic: true}))
    .addField("Reason:", reason, true)
    .addField("Total Warns:", get_warns - 1, true)
    .addField("Staff:", message.author, true)
    .addField("ID Target:", member.id, true)
    .addField("Target:", member.tag, true)
    .setColor("YELLOW")
    client.channels.cache.get(client.config.staffLogChannel).send(logEmbed);
}
