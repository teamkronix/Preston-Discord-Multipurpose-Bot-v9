const { Message, Client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");
const saixd = ['1175020913712975877']
module.exports = {
  name: "reload",
  aliases: ['rlcmd'],
  category: 'dev',
  run: async (client, message, args) => {
    if (!saixd.includes(message.author.id)) return;
    try {
      let reload = false;
      for (let i = 0; i < client.categories.length; i += 1) {
        let dir = client.categories[i];
        try {
          if (!args[0]) {
            const opp = new MessageEmbed()
            .setColor(client.color)
            .setDescription(`<:icons_reddet:1235288367491711016> | You didn't provided the command name.`)
            return message.channel.send({embeds: [opp]})
          }
          delete require.cache[require.resolve(`../../commands/${dir}/${args[0]}.js`)] 
          client.commands.delete(args[0])
          const pull = require(`../../commands/${dir}/${args[0]}.js`)
          client.commands.set(args[0], pull)
          reload = true;
        } catch {}
      }
      if (reload) {
        const op = new MessageEmbed()
        .setColor(client.color)
        .setDescription(`<:IconTick:1229080348277604456> | Successfully reloaded \`${args[0]}\``)
        return message.channel.send({embeds: [op]})
      }
      const notop = new MessageEmbed()
      .setColor(client.color)
      .setDescription(`<:icons_reddet:1235288367491711016> | I was unable to reload \`${args[0]}\``)
      return message.channel.send({embeds: [notop]});
    } catch (e) {
      const emesdf = new MessageEmbed()
      .setColor(client.color)
      .setDescription(`<:icons_reddet:1235288367491711016> | I was unable to reload \`${args[0]}\``);
      return message.channel.send({embeds: [emesdf]});
    }
  },
};