const { MessageEmbed } = require("discord.js");
const figlet = require("figlet");

module.exports = {
    name: "ascii",
    aliases: ["textart"],
    description: "Make your tetx look very cool.",
    category: "fun",
    usage: "!ascii hello",
    run: async (client, message, args) => {
        if (!args.join("")) {
          return message.reply({ content: `You Need To Give a Text To Make It Ascii` })
        }
      
        figlet.text(args.join(' '), {
            font : "",
        }, async (err ,data) => {
          message.channel.send(`\`\`\`${data}\`\`\``)
        })
    },
};