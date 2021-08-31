const config = {
  token: "TOKEN",
  prefix: "ev!",

  //Welcome Settings
  welcomeChannel: "CHANNEL ID",
  backgroundWelcomeLink: "URL",
  circleImageWelcome: "#fff",
  userJoinRole: "ID ROLE",

  welcome1sLine: "Welcome {member} to Eazv.", //Only available {member}, {member.tag}, {count}
  welcome2dLine: "We are currently {count} members",  //Only available {member}, {member.tag}, {count}

  //Leave Settings
  leaveChannel: "CHANNEL ID",
  backgroundLeaveLink: "URL",
  circleImageLeave: "#fff",

  leave1sLine: "See you later {member}", //Only available {member}, {member.tag}, {count}
  leave2dLine: "We are currently {count} members", //Only available {member}, {member.tag}, {count}

  //other
  staffLogChannel: "CHANNEL ID",
  logChannel: "CHANNEL ID",
  suggestChannel: "CHANNEL ID",
  countPlayers: "CHANNEL ID",
  guildID: "GUILD ID"
};

module.exports = config