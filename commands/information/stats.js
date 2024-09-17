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
            let user = await client.users.fetch(`1029065620878282792`);//ozuma
            dev.push(`[${user.username}](https://discord.com/users/1029065620878282792)`);

            user = await client.users.fetch(`893898066606833724`);//nezzy
            supp.push(`[${user.username}](https://discord.com/users/893898066606833724)`);
            user = await client.users.fetch(`1060730763923955793`);//ethan
            supp.push(`[${user.username}](https://discord.com/users/1060730763923955793)`);
            user = await client.users.fetch(`986316853104214026`);//apple
            supp.push(`[${user.username}](https://discord.com/users/986316853104214026)`);
          
            const statsEmbed = new Discord.MessageEmbed()
			        .setColor(client.color)
              .setAuthor(`${client.user.username} 's Information`, client.user.displayAvatarURL())
              .setThumbnail(message.guild.iconURL({dynamic: true}))
              .setDescription(`**<a:right_arrow:1229321873721004063> Bot's Mention: <@${client.user.id}>\n<a:right_arrow:1229321873721004063> Bot's Tag: ${client.user.tag}\n<a:right_arrow:1229321873721004063> Total Servers: ${client.guilds.cache.size}\n<a:right_arrow:1229321873721004063> Total Users: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\n<a:right_arrow:1229321873721004063> Total Channels: ${client.channels.cache.size}\n<a:developer:1235305152995397734> Developer - [T A U S I F](https://discord.com/users/1004001053743779870)\n<a:developer:1235305152995397734> Developer - [H E M](https://discord.com/users/1164892102845538367)\n<a:developer:1235305152995397734> Developer - [C A S I N O](https://discord.com/users/1056087251068649522)**`)
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