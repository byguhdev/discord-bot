const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Melhor playlist de estudos!'),
  async execute(interaction) {
    await interaction.reply('https://open.spotify.com/playlist/02Oi3Nx2LOPLqpsc8DPSP3?si=015fd52668f14419');
  },
};