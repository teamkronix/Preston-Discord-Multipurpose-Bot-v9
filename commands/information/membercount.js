const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "membercount",
  aliases: ['mc'],
  category: 'info',
  run: async (client, message, args) => {


    const embed = new MessageEmbed()
    .setColor(`#2f3136`)
    .setTitle(`Members`)
    .setDescription(`${message.guild.memberCount}`)
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
  }
}