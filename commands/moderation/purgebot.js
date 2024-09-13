const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'purge bots',
  aliases: ['clearbots','pb'],
  category: 'mod',
  run: async (client, message, args) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
      return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | You must have \`Manage Messages\` permissions to use this command.`)]})
    }
    if (!message.guild.me.permissions.has(["MANAGE_MESSAGES", "READ_MESSAGE_HISTORY"])) {
      return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | I must have \`Manage Messages\`, \`Read Message History\` permissions to use this command.`)]})
    }
    const embed = new MessageEmbed()
    .setColor(client.color);
    const amount = args[0] || 99;
    if(amount > 99){
      return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Maximum **99** bot messages can be purged at a time.`)]})
    }
    const response = await client.util.purgeMessages(message.member, message.channel, "BOT", amount);
    if (typeof response === "number") {
      return message.channel.send({embeds: [embed.setDescription(`<:IconTick:1229080348277604456> | Successfully deleted ${response} bot messages.`)]})
    } else if (response === "BOT_PERM") {
      return message.reply({embeds: [embed.setDescription(`<:icons_reddet:1235288367491711016> | I must have \`Manage Messages\`, \`Read Message History\` permissions to use this command.`)]})
    } else if (response === "MEMBER_PERM") {
      return message.reply({embeds: [embed.setDescription(`<:icons_reddet:1235288367491711016> | You must have \`Manage Messages\` permissions to use this command.`)]})
    } else if (response === "NO_MESSAGES") {
      return message.reply({embeds: [embed.setDescription(`<:icons_reddet:1235288367491711016> | There were no bots messages to purge.`)]})
    } else {
      return message.reply({embeds: [embed.setDescription(` | I was unable to delete the messages`)]})
    }
  }
}