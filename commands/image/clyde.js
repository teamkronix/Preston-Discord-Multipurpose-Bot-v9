const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
  name: 'clyde',
  description: 'Shows your text as Clyde\'s message',
  aliases: ["clyde"],
  usage: '<text>',
  category: 'Image',
  run: async (bot, message, args) => {

    const text = args.slice().join(' ');
    if (!text) {
      return message.channel.send(
        '<:icons_reddet:1235288367491711016> Please provide valid text.',
      );
    }

    const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

    let response;
    try {
      response = await fetch(url).then(res => res.json());
    }
    catch (e) {
      return message.channel.send('<:icons_reddet:1235288367491711016> An error occured, please try again!');
    }
    const attachment = new MessageAttachment(response.message, 'clyde.png');
    return message.channel.send(attachment);

  }
};