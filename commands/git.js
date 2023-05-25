const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
  .setColor("Orange")
  .setTitle("Comandos do git: ")
  .addFields(
    {
      name: "`git init`",
      value: "Inicializa um repositório Git",
      inline: false,
    },
    {
      name: "`git add`",
      value: "Adiciona um arquivo ao índice",
      inline: false,
    },
    {
      name: "`git commit`",
      value: "Registra as mudanças no repositório",
      inline: false,
    },
    {
      name: "`git push`",
      value: "Envia as mudanças para um repositório remoto",
      inline: false,
    },
    {
      name: "`git pull`",
      value: "Atualiza o repositório local com as alterações remotas",
      inline: false,
    },
    {
      name: "`git clone`",
      value: "Clona um repositório existente",
      inline: false,
    },
    {
      name: "`git branch`",
      value: "Gerencia as branches do repositório",
      inline: false,
    },
    {
      name: "`git merge`",
      value: "Combina as alterações de uma branch com outra",
      inline: false,
    }
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Lista os principais comandos do git"),
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
