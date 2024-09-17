const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "wlisted",
  aliases: ['l', 'trusted', 'whitelisted'],
  category: 'security',
  run: async (client, message, args) => {
    if (message.author.id !== message.guild.ownerId) {
      return message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Only owner of this server can use this command.`)]});
    } else {
      const antinuke = await client.db.get(`${message.guild.id}_antinuke`);
      if (!antinuke) {
        message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Seems that antinuke module is not enabled in this server.`)]});
      } else {
        await client.db.get(`${message.guild.id}_wl`).then(async (data) => {
          if (!data) {
            await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
            message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Please again run this command as the database was earlier not assigned.`)]})
          } else {
            const users = data.whitelisted;
            const mentions = [];
            
            if (users.length !== 0) {
              users.forEach(userId => mentions.push(`${client.emoji.dot} <@${userId}> (${userId})`));
              const whitelisted = new MessageEmbed()
                .setColor(client.color)
                .setTitle(`__**Whitelisted Users**__`)
                .setDescription(mentions.join('\n'));
              message.channel.send({ embeds: [whitelisted] });
            } else {
              message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | There are no whitelisted members in this server.`)]})
            }
          }
        });
      }
    }
  },
};