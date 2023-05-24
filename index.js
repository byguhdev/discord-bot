// 1 - Exigir as classes discord.js necessárias
const { Client, Events, GatewayIntentBits } = require("discord.js");
// 2 - Configurando o dotenv
const dotenv = require("dotenv").config();
// 3 - Pegando os valores das variaveis do .env
const { BOT_TOKEN, CLIENT_ID, GUILD_ID } = process.env;
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));
  
//console.log(commandsFiles);
// Criar uma new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Quando o cliente estiver pronto, execute este código (apenas uma vez)
// Usamos 'c' para o parâmetro do evento para mantê-lo separado do 'cliente' já definido
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Faça login no Discord com o token do seu cliente
client.login(BOT_TOKEN);
