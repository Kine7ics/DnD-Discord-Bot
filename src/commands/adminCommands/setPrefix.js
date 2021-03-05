module.exports = {
  commands: ["setPrefix", "changePrefix"],
  expectedArgs: "<newPrefix>",
  permissionError: "You need admin permissions to run this command",
  minArgs: 1,
  maxArgs: 1,
  callback: async (message, arguments) => {
    const config = require("../../config.json");

    config.prefix = arguments[0];

    message.reply(`the command prefix has been changed to: "${newPrefix}"`);
  },
  permissions: ["ADMINISTRATOR"],
  description: "changes the command prefix.",
};
