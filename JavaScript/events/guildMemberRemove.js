const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = async (client, member) => {
  const guild = member.guild;
  guild.channels.cache
    .get(client.config.countPlayers)
    .setName("🎮 | Users: " + guild.memberCount);
  const canvas = Canvas.createCanvas(800, 360);
  Canvas.registerFont("./Yusei.ttf", { family: "Yusei" });
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(client.config.backgroundLeaveLink);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.font = "35px Yusei";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaselin = "hanging";

  //1st Line
  ctx.fillText(client.config.leave1sLine.replace("{member}", member.user.username).replace("{member.tag}", member.user.tag).replace("{count}", guild.memberCount), canvas.width / 2, 295);
  
  //2nd Line
  ctx.fillText(client.config.leave2dLine.replace("{member}", member.user.username).replace("{member.tag}", member.user.tag).replace("{count}", guild.memberCount), canvas.width / 2, 337);

  const y = 70,
    radio = 85,
    x = canvas.width / 2 - radio;
  ctx.beginPath();
  ctx.arc(x + radio, y + radio, radio + 5, 0, Math.PI * 2, true);
  ctx.fillStyle = client.config.circleImageLeave;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.save();
  ctx.beginPath();
  ctx.arc(x + radio, y + radio, radio, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(
    await Canvas.loadImage(
      member.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" })
    ), x, y, radio * 2, radio * 2);
    
  const attach = new Discord.MessageAttachment(canvas.toBuffer(), "leave.gif");

  const logEmbed = new Discord.MessageEmbed()
    .setAuthor(`${member.user.tag}`)
    .setDescription(`📕 <@${member.user.id}> **has left the server**`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setFooter(`ID: ${member.user.id}`)
    .setTimestamp()
    .setColor("RED");

  client.channels.cache.get(client.config.logChannel).send(logEmbed);
  client.channels.cache.get(client.config.leaveChannel).send(attach);
};
