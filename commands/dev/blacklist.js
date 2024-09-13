const { Message, Client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");
const discordinfo = require("discordinfo.js");
const data = require("../../config");
const saixd = ['1175020913712975877']
module.exports = {
  name: "user",
  aliases: ['wl', 'bl'],
  category: 'dev',
  run: async (client, message, args) => {
    try {
      if(!saixd.includes(message.author.id)) return
      const user = new discordinfo({
        token: data.token
     });
      
      const users = args[0]
      if(!users) {
        const embed = new MessageEmbed()
        .setDescription(`<a:right_arrow:1229321873721004063> **ADD USER IN BLACKLIST**\n<a:right_arrow:1229321873721004063><a:right_arrow:1229321873721004063> **Kindly Provide User Id**`)
        .setColor("DARK_BUT_NOT_BLACK")
        return message.channel.send({embeds: [embed]})
      }

   
      

      
        const syt = await user.getUser(users)

        const db  = await client.db.get(`blacklist_${syt.id}`);

        if(db){
            await client.db.set(`blacklist_${syt.id}`, false)
            const embed = new MessageEmbed()
            .setDescription(`<:IconTick:1229080348277604456> | ${syt.username} has been whitelisted`)
            .setColor("DARK_BUT_NOT_BLACK")
            message.channel.send({embeds: [embed]})
        } else {
            const embed = new MessageEmbed()
            .setDescription(`<:IconTick:1229080348277604456> | ${syt.username} has been blacklisted`)
            .setColor("DARK_BUT_NOT_BLACK")
            message.channel.send({embeds: [embed]})
            await client.db.set(`blacklist_${syt.id}`, true)
        }
      } catch(err){
     const embed = new MessageEmbed()
     .setDescription("<:icons_reddet:1235288367491711016> **SOMETHING WENT WRONG** <:icons_reddet:1235288367491711016>")
     return message.channel.send({embeds: [embed]})
      } 

  }}