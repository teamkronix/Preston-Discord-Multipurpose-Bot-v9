const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'whitelist',
  aliases: ['wl'],
  category: 'security',
  run: async (client, message, args) => {
    const wl = new MessageEmbed()
      .setColor(client.color)
      .setTitle(`__**Whitelist Commands**__`)
      .setDescription(`**Adds user to whitelisted users which means that there will be no actions taken on the whitelisted members if they trigger the antinuke module.**`)
      .addFields([
        { name: `__**Usage**__`, value: `<a:right_arrow:1229321873721004063> \`${message.guild.prefix}whitelist @user\`\n<a:right_arrow:1229321873721004063> \`${message.guild.prefix}wl @user\`` }
      ])
    if (message.author.id !== message.guild.ownerId) {
      return message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Only owner of this server can use this command.`)]});
    } 
    const antinuke = await client.db.get(`${message.guild.id}_antinuke`);
    if (!antinuke) {
      const dissable = new MessageEmbed()
        .setColor(client.color)
        .setDescription(` ** ${message.guild.name} Security settings <a:antinuke:1235292420342812732>
Ohh NO! looks like your server doesn't enabled security

Current Status :  <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>

To enable use antinuke enable ** `)
      message.channel.send({ embeds: [dissable]})
    } else {
      await client.db.get(`${message.guild.id}_wl`).then(async (data) => {
        if (!data) {
          await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
          return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | Please again run this command as the database was earlier not assigned.`)]})
        } 
        const user = message.mentions.users.first();
        if (!user) {
          return message.reply({ embeds: [wl] });
        } else {
          const userId = user.id;
          if (data.whitelisted.includes(userId)) {
             message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | <@${user.id}> is already a whitelisted member.`)] });
          } else {
            await client.db.push(`${message.guild.id}_wl.whitelisted`, userId);
            message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:IconTick:1229080348277604456> | Successfully added <@${user.id}> as whitelisted user.`)] });
          }
        }
      })
    }
  }
}