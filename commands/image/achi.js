const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  aliases: ["ach"],
  category: "Image",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setColor("DARK_BUT_NOT_BLACK")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
    message.channel.send({embeds: [e]});
  },
};