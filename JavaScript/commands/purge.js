const Discord = require("discord.js");

module.exports = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Insufficient permissions");

  if (!args[0]) {
    const noN = new Discord.MessageEmbed()
      .setDescription("Set an amount less than ``100`` and greater than ``0``.")
      .setColor("RED");
    return message.channel.send(noN);
  }

  let number = args[0];
  if (isNaN(number))
    return message.channel.send("You need to enter numbers, not letters or symbols.");

  number = parseInt(number);

  if (number >= 100 || number <= 0)
    return message.channel.send("The value is not correct.");

  message.channel
    .bulkDelete(number + 1)
    .then(() => {})
    .catch((error) => {
      const errorEmbed = new Discord.MessageEmbed()
        .setDescription(`${error.message}`)
        .setFooter("Eazv Development")
        .setColor("RED");
      message.channel.send(errorEmbed);
    });
}
