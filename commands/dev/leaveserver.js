const { MessageEmbed } = require('discord.js');
const saixd = ['1175020913712975877'];
module.exports = {
  name: `leaveserver`,
  category: `dev`,
  aliases: [`leaveg`, `gleave`],
  description: `Leaves A Guild`,
  run: async (client, message, args) => {
    if(!saixd.includes(message.author.id)) return;
    let id = args[0];
    if(!id){
      return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | **You didn't provided the server Id.**`)]})
    }
    let guild = await client.guilds.fetch(id);
    let name = guild?.name || 'No Name Found';
    if(!guild){
      return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:icons_reddet:1235288367491711016> | **You didn't provided a valid server Id.**`)]})
    }
    await guild.leave();
    return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<:IconTick:1229080348277604456> | Successfully Left **${name} (${id})**.`)]})
  }
};