module.exports = {
  commands: ["settings", "getSettings"],
  expectedArgs: "",
  maxArgs: 0,
  permissionError: "You need admin permissions to run this command",
  callback: async (message) => {
    const config = require("../../config.json");

    message.author.createDM().then((channel) => {
      channel.send(JSON.stringify(config));
    });
  },
  permissions: ["ADMINISTRATOR"],
  description: "gives the server's settings",
};
