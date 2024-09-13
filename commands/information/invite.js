const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

// Command
module.exports = {
  name: "invite",
  aliases: ['i'],
  category: 'info',
  run: async (client, message, args) => {
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    )
    
    // Sending
    message.reply({
      embeds: [new MessageEmbed().setColor(client.color).setDescription(`<a:dot:1234860701302919168> <a:right_arrow:1229321873721004063> **Client id: **1180545631471796224\n<a:right_arrow:1229321873721004063><a:right_arrow:1229321873721004063> **Permissions:** 2113268958\n<a:right_arrow:1229321873721004063><a:dot:1234860701302919168> **Executor:** ${message.author.username}\n<a:right_arrow:1229321873721004063>  If you need further help pls join our [Support Server](https://discord.gg/teamkronix)`)],
      components: [button] });
  },
};