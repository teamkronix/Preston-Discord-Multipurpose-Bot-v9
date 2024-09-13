const { MessageEmbed } = require('discord.js');
const saixd = ['1175020913712975877']
module.exports = {
	name: `serverslist`,
	category: `Owner`,
	aliases: [`slist`],
	description: `Shows servers list`,
	usage: `servers-list`,
	run: async (client, message, args) => {
	  
		if(!saixd.includes(message.author.id)) return;
		 
		try {

			let servers = []
			client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r).forEach(element => {
				servers.push(element)
			});

			let serverslist = [];
			for (let i = 0; i < servers.length; i += 15) {
			  let xservers = servers.slice(i, i + 15);
			  serverslist.push(xservers.map((r, index) => `**${i + ++index}** - ${r.name} | ${r.memberCount} Members\nID: ${r.id}`).join(`\n`))
			}
			let limit = Math.round(servers.length / 15)
			let embeds = []
			for (let i = 0; i < limit; i++) {
			  let desc = String(serverslist[i]).substr(0, 2048)
			   embeds.push(new MessageEmbed()
        .setFooter('Stone Servers')
			  .setColor(client.color)
				.setDescription(desc));
			}	  
	        return paginationxd(client, message, embeds, 60)

		} catch (e) {
			console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor(client.color)
			.setAuthor(`An Error Occurred`)
			.setDescription(`\`\`\`${e.message}\`\`\``);
			return message.channel.send({embeds: [emesdf]});
		}
	},
};

  async function paginationxd(client, message, embeds) {
      let currentPage = 0;
      const { MessageButton, MessageActionRow } = require("discord.js");
      let buttonrow1 = new MessageActionRow()
      .addComponents(
         new MessageButton()
      .setStyle('PRIMARY')
      .setEmoji('<:urowoo:1170752474664161442>')
      .setCustomId('first'),
     new MessageButton()
      .setStyle('SECONDARY')
      .setEmoji('<a:right_arrow:1229321873721004063>')
      .setCustomId('back'),
      new MessageButton()
      .setStyle('SUCCESS')
      .setEmoji('<:icons_reddet:1235288367491711016>')
      .setCustomId('home'),
    
      new MessageButton()
      .setStyle('SECONDARY')
      .setEmoji('<a:right_arrow:1229321873721004063> ')
      .setCustomId('next'),
      new MessageButton()
      .setStyle('PRIMARY')
      .setEmoji('<a:Left_arrow:1229321807178367027>')
      .setCustomId('last')
          );
      if (embeds.length === 1) return message.channel.send({embeds: [embeds[0]]})
      const queueEmbed = await message.channel.send(
        {
          content: `**Current Page - ${currentPage + 1}/${embeds.length}**`,
          components: [buttonrow1],
          embeds: [embeds[currentPage]]
        }
      );
      const collector = message.channel.createMessageComponentCollector({ 
                            filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
                        })
    
      collector.on("collect", (interaction) => {
    
        if(interaction.customId == "next"){
          if (currentPage < embeds.length - 1) {
            interaction.reply({content: `Success`, ephemeral: true})
                  currentPage++;
                  queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
                } else {
                  interaction.reply({content: `Success`, ephemeral: true})
                  currentPage = 0
                  queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
                }
        } else if(interaction.customId == "back"){
          interaction.reply({content: `Success`, ephemeral: true})
        
          if (currentPage !== 0) {
                  --currentPage; to
                  queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
                } else {
                  currentPage = embeds.length - 1
                  queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
                }
    } else if(interaction.customId == "first"){
      interaction.reply({content: `Success`, ephemeral: true})
    
      currentPage = 0;
            queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
            queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
            queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
            
    } else if(interaction.customId == "last"){
      interaction.reply({content: `Success`, ephemeral: true})
    
      currentPage = embeds.length - 1;
            queueEmbed.edit({content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1]});
            
    } else if(interaction.customId == "home"){
          
    }  
  })
}