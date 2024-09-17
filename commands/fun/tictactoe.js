const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const simplydjs = require("simply-djs");

module.exports = {
  name: "tictactoe",
  category: "fun",
  aliases: ["ttt"],
  usage: "!calculator or !calc",
  run: async (client, message, args) => {
    simplydjs.tictactoe(message, {
      embedColor: client.color,
      embedFoot: "Best Of Luck",
      credit: false,
    });
  }
}