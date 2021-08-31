module.exports = (client) => {
  const status = ["Eazv Development", "Supporting", "github.com/Enoughsdv"];

  setInterval(() => {
    let index = status[Math.floor(status.length * Math.random())];

    client.user.setPresence({
      status: "dnd",
      activity: {
        name: index,
        type: "WATCHING",
      },
    });
  }, 10000);

  client.guilds.cache
    .get(client.config.guildID)
    .channels.cache.get(client.config.countPlayers)
    .setName("🎮 | Users: " + client.guilds.cache.get(client.config.guildID).memberCount);
};
