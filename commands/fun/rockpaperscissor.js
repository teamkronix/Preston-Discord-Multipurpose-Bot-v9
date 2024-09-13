const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const simplydjs = require("simply-djs");

module.exports = {
  name: "rockpaperscissor",
  category: "fun",
  aliases: ["rps"],
  usage: "!rockpaperscissor or !rps",
  run: async (client, message, args) => {
    simplydjs.rps(message, {
      embedColor: client.color,
      timeoutEmbedColor: client.color,
      drawEmbedColor: client.color,
      winEmbedColor: client.color,
      embedFooter: "Best Of Luck",
      credit: false,
    });
  }
}