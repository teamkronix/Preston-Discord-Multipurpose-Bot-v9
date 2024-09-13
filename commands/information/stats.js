const { MessageEmbed } = require("discord.js");
const Discord  = require("discord.js");

module.exports = {
    name: "stats",
    category: "info",
    aliases: ['botinfo'],
    usage: "stats",
    run: async (client, message, args, guildData, player, prefix) => {
        try {
            let dev = [], cdev = [], supp =[];
            let user = await client.users.fetch(`1175020913712975877`);//ozuma
            dev.push(`[${user.username}](https://discord.com/users/1175020913712975877)`);

            user = await client.users.fetch(`621969091103817728`);//nezzy
            supp.push(`[${user.username}](https://discord.com/users/621969091103817728)`);
            user = await client.users.fetch(`621969091103817728`);//ethan
            supp.push(`[${user.username}](https://discord.com/users/621969091103817728)`);
            user = await client.users.fetch(`621969091103817728`);//apple
            supp.push(`[${user.username}](https://discord.com/users/621969091103817728)`);
          
            const statsEmbed = new Discord.MessageEmbed()
			        .setColor(client.color)
              .setAuthor(`${client.user.username} 's Information`, client.user.displayAvatarURL())
              .setThumbnail(message.guild.iconURL({dynamic: true}))
              .setDescription(`**<a:right_arrow:1229321873721004063> Bot's Mention: <@${client.user.id}>\n<a:right_arrow:1229321873721004063> Bot's Tag: ${client.user.tag}\n<a:right_arrow:1229321873721004063> Total Servers: ${client.guilds.cache.size}\n<a:right_arrow:1229321873721004063> Total Users: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\n<a:right_arrow:1229321873721004063> Total Channels: ${client.channels.cache.size}\n<a:developer:1235305152995397734> Developer - [V E N O M](https://discord.com/users/1175020913712975877)\n<a:developer:1235305152995397734> Developer - [V E N O M](https://discord.com/users/1175020913712975877)\n<a:developer:1235305152995397734> Developer - [V O L T Y](https://discord.com/users/1175020913712975877)**`)
            message.channel.send({embeds: [statsEmbed]});
        } catch (e) {
          const emesdf = new MessageEmbed()
    			.setColor(client.color)
		    	.setAuthor(`An Error Occurred`)
			    .setDescription(`\`\`\`${e.message}\`\`\``);
			    return message.channel.send({embeds: [emesdf]});
        }
    }
}