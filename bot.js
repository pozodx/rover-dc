import { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const VERIFY_URL = `${process.env.BASE_URL}/verify`;

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== 'verify') return;

  const embed = new EmbedBuilder()
    .setTitle('SERVER VERIFICATION')
    .setDescription('You must verify your Roblox account to access the server.')
    .setColor(0xff007f);

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setLabel('Click to Verify')
      .setStyle(ButtonStyle.Link)
      .setURL(VERIFY_URL)
  );

  await interaction.reply({ embeds: [embed], components: [row] });
});

client.login(process.env.DISCORD_TOKEN);