const { MessageEmbed } = require('discord.js'),
  st = require('../../core/settings').bot;


module.exports = {
  name: 'antinuke',
  aliases: ['antiwizz', 'an'],
  category: 'security',
  run: async (client, message, args) => {
    let prefix = message.guild.prefix || '.';
    const option = args[0];
    const isActivatedAlready = await client.db.get(`${message.guild.id}_antinuke`);
    const antinuke = new MessageEmbed()
      .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
      .setColor(client.color)
      .setTitle(`__**Antinuke**__`)
      .setDescription(`<a:right_arrow:1229321873721004063> It bans admins for doing suspicious activites in the server.\n<a:right_arrow:1229321873721004063> It ignores the ones who are whitelisted.\n<a:right_arrow:1229321873721004063> Antinuke must me enabled to protect the server.`)
      .addFields([
        { name: `__**Antinuke Enable**__`, value: `To Enable Antinuke, Use - \`${prefix}antinuke enable\`` },
        { name: `__**Antinuke Disable**__`, value: `To Disable Antinuke, Use - \`${prefix}antinuke disable\`` }
      ])

    if (message.author.id === message.guild.ownerId) {
      if (!option) {
        message.reply({ embeds: [antinuke] });
      } else if (option === 'enable') {
        if (isActivatedAlready) {
          const enabnble = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setDescription(`**  ${message.guild.name} Security Settings <a:antinuke:1235292420342812732>
Ohh uh! looks like your server has already enabled security 

Current Status : <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>

To disable use ${prefix}antinuke disable **`)
          message.channel.send({ embeds: [enabnble] })
        } else {
          await client.db.set(`${message.guild.id}_antinuke`, true);
          const enable = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor({name: `${client.user.username} Security`, iconURL: client.user.displayAvatarURL()})
            .setColor(client.color)
            .setDescription(`
    **  ${message.guild.name} Security Settings ** <a:antinuke:1235292420342812732>
** Also move my role to top of roles for me to work properly **<:badge_owner:1235292031413387387>
      ** 
Anti Ban <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Kick <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>Anti Unban <:antinuke_yes:1235126410171912212><:tickt:1186909998375243776>
Anti Role-Create <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>Anti Role-Delete <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Role-Update <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Channel-Create <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Channel-Delete <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Channel-Update <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Emoji Create <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Emoji Update <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Emoji Delete <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Webhook Create <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Webhook Update <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Webhook Delete <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Sticker Create <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Sticker Update <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Sticker Delete <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Everyone/Here <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Server-Update <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Prune <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Bot Add <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Anti Vanity Steal <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Auto Recovery <:antinuke_yes:1235126410171912212><:antinuke_nope:1235126487468740692>
Enabled antinuke for this server
      **`)
          message.channel.send({ embeds: [enable] })
          await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
        }
      } else if (option === 'disable') {
        if (!isActivatedAlready) {
          const dissable = new MessageEmbed().setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setDescription(` ** ${message.guild.name} ** security settings <a:antinuke:1235292420342812732>
Ohh NO! looks like your server doesn't enabled security **

** Current Status : <:antinuke_nope:1235126487468740692><:antinuke_yes:1235126410171912212>**

** To enable use ${prefix}antinuke enable ** `)
          message.channel.send({ embeds: [dissable] })
        } else {
          await client.db.set(`${message.guild.id}_antinuke`, null);
          const disable = new MessageEmbed().setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setDescription(`** ${message.guild.name} Security settings <a:antinuke:1235292420342812732> Successfully disabled security settings.

 Current Status : <:antinuke_nope:1235126487468740692><:antinuke_yes:1235126410171912212>

To enable again use ${prefix}antinuke enable **`)
          message.channel.send({ embeds: [disable] })
        }
      }
    } else {
      message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription('<:icons_reddet:1235288367491711016> | Only Server Owner Can Run This Command.')] });
    }
  }
}