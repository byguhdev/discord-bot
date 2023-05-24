const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("The test ping write pong"),
  async execute(interaction) {
    await interaction.reply("Pong");
  },
};
