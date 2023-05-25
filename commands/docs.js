const {
  SlashCommandBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

const row = new ActionRowBuilder().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Nenhuma linguagem selecionada")
    .addOptions(
      {
        label: "JavaScript",
        description: "Veja a documentação do JavaScript",
        value: "JavaScript",
      },
      {
        label: "Python",
        description: "Veja a documentação do Python",
        value: "Python",
      },
      {
        label: "Java",
        description: "Veja a documentação do Java",
        value: "Java",
      },
      {
        label: "C++",
        description: "Veja a documentação do C++",
        value: "C++",
      },
      {
        label: "Ruby",
        description: "Veja a documentação do Ruby",
        value: "Ruby",
      },
      {
        label: "PHP",
        description: "Veja a documentação do PHP",
        value: "PHP",
      },
      {
        label: "C",
        description: "Veja a documentação do C",
        value: "C",
      },
      {
        label: "Swift",
        description: "Veja a documentação do Swift",
        value: "Swift",
      },
      {
        label: "Go",
        description: "Veja a documentação do Go",
        value: "Go",
      },
      {
        label: "Rust",
        description: "Veja a documentação do Rust",
        value: "Rust",
      },
      {
        label: "TypeScript",
        description: "Veja a documentação do TypeScript",
        value: "TypeScript",
      },
      {
        label: "Kotlin",
        description: "Veja a documentação do Kotlin",
        value: "Kotlin",
      },
      {
        label: "HTML",
        description: "Veja a documentação do HTML",
        value: "HTML",
      },
      {
        label: "CSS",
        description: "Veja a documentação do CSS",
        value: "CSS",
      },
      {
        label: "PostgreSQL",
        description: "Veja a documentação do PostgreSQL",
        value: "PostgreSQL",
      },
      {
        label: "MongoDB",
        description: "Veja a documentação do MongoDB",
        value: "MongoDB",
      },
      {
        label: "Redis",
        description: "Veja a documentação do Redis",
        value: "Redis",
      },
      {
        label: "Docker",
        description: "Veja a documentação do Docker",
        value: "Docker",
      },
      {
        label: "Kubernetes",
        description: "Veja a documentação do Kubernetes",
        value: "Kubernetes",
      },
      {
        label: "AWS",
        description: "Veja a documentação da AWS",
        value: "AWS",
      },
      {
        label: "Azure",
        description: "Veja a documentação do Azure",
        value: "Azure",
      }
    )
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("documentation")
    .setDescription("Language documentation here!"),
  async execute(interaction) {
    await interaction.reply({
      content: "Selecione um linguagem",
      components: [row],
    });
  },
  documentationLinks: {
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Python: "https://docs.python.org/3/",
    Java: "https://docs.oracle.com/en/java/",
    "C++": "https://en.cppreference.com/w/",
    Ruby: "https://ruby-doc.org/",
    PHP: "https://www.php.net/docs.php",
    C: "https://en.cppreference.com/c/",
    Swift: "https://docs.swift.org/",
    Go: "https://golang.org/doc/",
    Rust: "https://doc.rust-lang.org/",
    TypeScript: "https://www.typescriptlang.org/docs/",
    Kotlin: "https://kotlinlang.org/docs/",
    HTML: "https://www.w3schools.com/html/",
    CSS: "https://www.w3schools.com/css/",
    PostgreSQL: "https://www.postgresql.org/docs/",
    MongoDB: "https://docs.mongodb.com/",
    Redis: "https://redis.io/documentation",
    Docker: "https://docs.docker.com/",
    Kubernetes: "https://kubernetes.io/docs/",
    AWS: "https://aws.amazon.com/documentation/",
    Azure: "https://docs.microsoft.com/en-us/azure/",
  },
};
