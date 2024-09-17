const { Message, Client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");
const saixd = ['1004001053743779870','1056087251068649522','1164892102845538367']
module.exports = {
  name: "eval",
  aliases: ['ev', 'jaduexe','jsk'],
  category: 'dev',
  run: async (client, message, args) => {
        
      if(!saixd.includes(message.author.id)) return
      const content = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      const result = new Promise(resolve => resolve(eval(content)));

      return result
        .then(output => {
          if (typeof output !== "string") {
            output = require("util").inspect(output, { depth: 0 });
          }
          if (output.includes(client.token)) {
            output = output.replace(
              client.token,
              "Lund Lega ???"
            );
          }
          const user = new MessageEmbed()
          .setColor(client.color)
          .setDescription(`\`\`\`js\n${output}\`\`\``)
          message.channel.send({embeds: [user]});
        })
        .catch(err => {
          err = err.toString();
          if (err.includes(client.token)) {
            err = err.replace(client.token, "");
          }
          message.channel.send(err, {
            code: "js"
          });
        });
    
}};