const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'unwhitelist',
  aliases: ['uwl'],
  category: 'security',
  run: async (client, message, args) => {
    
    const uwl = new MessageEmbed()
      .setColor(client.color)
      .setTitle(`__**Unwhitelist Commands**__`)
      .setDescription(`**Removes user from whitelisted users which means that there will be proper actions taken on the members if they trigger the antinuke module.**`)
      .addFields([
        { name: `__**Usage**__`, value: `<a:right_arrow:1229321873721004063> \`${message.guild.prefix}unwhitelist @user\`\n<a:right_arrow:1229321873721004063> \`${message.guild.prefix}uwl @user\`` }
      ])
    
    if (message.author.id !== message.guild.ownerId) {
      return message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Only owner of this server can use this command.`)]});
    } else {
      const antinuke = await client.db.get(`${message.guild.id}_antinuke`);
      if (!antinuke) {
         const dissable = new MessageEmbed()
          .setColor(client.color)
          .setDescription(` ** ${message.guild.name} Security settings <a:antinuke:1235292420342812732>
Ohh NO! looks like your server doesn't enabled security

Current Status : <:antinuke_nope:1235126487468740692><:antinuke_yes:1235126410171912212>

To enable use antinuke enable ** `)
      } else {
        await client.db.get(`${message.guild.id}_wl`).then(async (data) => {
          if (!data) {
            await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
            return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Please again run this command as the database was earlier not assigned.`)]})
          } else {
            const user = message.mentions.users.first();
            if (!user) {
              message.reply({ embeds: [uwl] });
            } else {
              const userId = user.id;
              
              if (!data.whitelisted.includes(userId)) {
                message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | <@${user.id}> is not a whitelisted member.`)] });
              } else {
                await client.db.pull(`${message.guild.id}_wl.whitelisted`, userId);
                 message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:IconTick:1229080348277604456> | Successfully removed <@${user.id}> from whitelisted user.`)] });
              }
            }
          }
        })
      }
    }
  }
}