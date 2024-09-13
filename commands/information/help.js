const {
    MessageEmbed,
    Message,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
    Client,
} = require("discord.js");
const Settings = require("../../core/settings.js");
const client = require("../../index");
const db = require("../../core/db");

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    run: async (client, message, args) => {
        let prefix = await db.get(`prefix_${message.guild.id}`);
        if (!prefix) prefix = Settings.bot.info.prefix;
        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId("helpop")
                .setPlaceholder(`Choose A Category.`)
                .addOptions([
                    {
                        label: " AntiNuke",
                        description: "Get All AntiNuke Command List",
                        value: "first",
                    },
                    {
                        label: " Moderation",
                        description: "Get All Moderation Command List",
                        value: "second",
                    },
                    {
                        label: "Utility",
                        description: "Get All Utility Command List",
                        value: "third",
                    },
                    {
                        label: "Giveaway",
                        description: "Get All Giveaway Commmand List",
                        value: "fifth",
                    },
                    {
                        label: "Fun",
                        description: "Get All Fun Command List",
                        value: "fourth",
                    },
                    {
                        label: "Welcomer",
                        description: "Get All Welcomer Command List",
                        value: "sixth",
                    },
                    {
                        label: "Custom Role",
                        description: "Get All Custom Role Command List",
                        value: "seven",
                    },
                ]),
        );
        const embed = new MessageEmbed()
            .setColor("#2f3136")
            .setAuthor(
                `${client.user.tag} Help Panel`,
                client.user.displayAvatarURL({ dynamic: true }),
                
            )

            .setImage(
                `https://media.discordapp.net/attachments/1229087570097606699/1234857708180475965/IMG_8189.gif?ex=6632425c&is=6630f0dc&hm=2a876dc74df705d4d6aa74174df5a344309d6a66c5080f771a52756105545527&`,
            )

            .setDescription(
                `<:wumpusWave:1283408706800979968> **__About Preston__** \n<:arrow_lucid:1283410747828736121> **Prefix For This Server \`${prefix}\`**\n<:arrow_lucid:1283410747828736121> **Total Commands - \`114\`**\n\n<:Link:1283410954188623872>  **__Important Links__** \n<:arrow_lucid:1283410747828736121> [Invite Preston](https://discord.com/oauth2/authorize?client_id=1228004504486674523&permissions=8&scope=applications.commands%20bot)\n <:arrow_lucid:1283410747828736121> [Preston Support](https://discord.gg/6Ufh4tPJ)\n <:arrow_lucid:1283410747828736121> [Vote Preston](https://discord.gg/9A5ysAvcY8)\n\n <:slashC:1283412518471077929> **__Main Modules__** \n<:antinuke:1283412521071673377> **Antinuke**\n<:cs_moderator:1283412523940577350> **Moderation**\n<:cs_tamir:1283412526528335944> **Utility**\n<:cs_giweaway:1283412534996500511> **Giveaway**\n<:cs2_wumpus:1283412542525411330> **Fun**\n<:sd_image:1283490934209908759> **Image**\n<:cs_staff:1283412540227059783> **Custom Roles**\n<:cs_login:1283412532748615771> **Welcomer**`,
            )
            .setThumbnail(message.guild.iconURL({ dynamic: true }));
        message.channel.send({ embeds: [embed], components: [row] });
    },
};

function embeds(embed, prefix, ping) {
    if (embed === "help") {
        return new MessageEmbed()
            .setColor("#2f3136")
            .setAuthor(
                client.user.username,
                client.user.displayAvatarURL(),
                "https://discord.gg/teamkronix",
            )
            .setDescription(`**<:arrow_lucid:1283410747828736121> My Default Prefix Is  ${prefix}**

**<:arrow_lucid:1283410747828736121>  A Best Antinuke Security Bot With Many More Advance Features
<:arrow_lucid:1283410747828736121>  ${client.user.username} Provides You Best Premium Security Features 
<:arrow_lucid:1283410747828736121>  [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) | [Support](https://discord.gg/teamkronix) | Total Commands 114**

**Choose One Of The Category Below : **

<:logging:1234860630175907960>  **__Main Modules__**
>  **<:arrow_lucid:1283410747828736121> Antinuke **
>  **<:arrow_lucid:1283410747828736121> Moderation**
>  **<:arrow_lucid:1283410747828736121> Whitelist** `);
    } else if (embed === "x") {
        return new MessageEmbed()
            .setColor("#2f3136")
            .setDescription(
                "**MODERATION** `ban`,`kick`,`unban`,`mute`,`unmute`,`lock`,`unlock`,`unhide`,`hide`,`unbanall`,`nuke`",
            );
    } else if (embed === "toggle") {
        return new MessageEmbed().setColor("#2f3136")
            .setDescription(`**Antinuke Commands Of Preston**

>  To Enable Use :  \`.antinuke enable\`
>  To Disable Use :  \`.antinuke disable\`

Enabling Antinuke Will Feature Your Server : 

• \`Anti Ban\`,\`Anti Kick\`,\`Anti Unban\`,\` Anti Role Create\`,\`Anti Role Update \`,\`Anti Role Delete\`,\` Anti Channel Create\`,\`Anti Channel Delete\`,\`Anti Channel Update\`, \`Anti Emoji Create\` , \`Anti Emoji Delete\` , \`Anti Emoji Update\`,\`Anti Webhook Create \`,\`Anti Webhook Update\`,\`Anti Webhook Delete\`,\`Anti Sticker Create\`,\`Anti Sticker Update\`,\`Anti Sticker Delete\`,\`Anti Everyone/Here \`,\`Anti Server Update \`,\`Anti Prune \`,\`Anti Bot Add \`,\`Anti Vanity Steal \``);
    }
}
