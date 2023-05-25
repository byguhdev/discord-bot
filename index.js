// 1 - Exigir as classes discord.js necessárias
const { Collection } = require("discord.js");
const { Client, Events, GatewayIntentBits } = require("discord.js");
// 2 - Configurando o dotenv
const dotenv = require("dotenv").config();
// 3 - Pegando os valores das variaveis do .env
const { BOT_TOKEN } = process.env;
const fs = require("node:fs");
const path = require("node:path");

// Criar uma new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

client.commands = new Collection();

for (file of commandsFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `Este comando em ${filePath} está com data ou execute ausentes`
    );
  }
}

// Quando o cliente estiver pronto, execute este código (apenas uma vez)
// Usamos 'c' para o parâmetro do evento para mantê-lo separado do 'cliente' já definido
// Login do bot
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Faça login no Discord com o token do seu cliente
client.login(BOT_TOKEN);

// Listener de interações com o bot

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isStringSelectMenu()) {
    const selected = interaction.values[0];
    let { documentationLinks } = require("./commands/docs");

    if (selected in documentationLinks) {
      return await interaction.reply(
        `Documentação do ${selected}: ${documentationLinks[selected]}`
      );
    } else {
      console.log("Valor não encontrado!");
    }
  }

  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    console.error(`Comando não encontrado`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
  }
});
