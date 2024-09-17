const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
    name: "userinfo",
    aliases: ['ui', 'whois'],
    category: 'info',
    description: "To Get Information About A User",
    run: async (client, message, args) => {
        const permissions = {
            "ADMINISTRATOR": "Administrator",
            "MANAGE_GUILD": "Manage Server",
            "MANAGE_ROLES": "Manage Roles",
            "MANAGE_CHANNELS": "Manage Channels",
            "KICK_MEMBERS": "Kick Members",
            "BAN_MEMBERS": "Ban Members",
            "MANAGE_NICKNAMES": "Manage Nicknames",
            "MANAGE_EMOJIS": "Manage Emojis",
            "MANAGE_WEBHOOKS": "Manage Webhooks",
            "MANAGE_MESSAGES": "Manage Messages",
            "MENTION_EVERYONE": "Mention Everyone"
        }
        const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const nick = mention.nickname === null ? "None" : mention.nickname;
        const roles = mention.roles.cache.get === "" ? "None" : mention.roles.cache.get;
        const usericon = mention.user.displayAvatarURL({dynamic: true});
        const mentionPermissions = mention.permissions.toArray() === null ? "None" : mention.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
            else;
        }
        var flags = {
            "DISCORD_EMPLOYEE": "<:discord_employee:1235307269978329098>",
            "DISCORD_PARTNER": "<a:partnershine:1235307116294705182>",
            "BUGHUNTER_LEVEL_1": "<:BUG_HUNTER_LEVEL_1:1235306891945705593>",
            "BUGHUNTER_LEVEL_2": "<:BugHunter_Level2:1235306909486157854>",
            "HYPESQUAD_EVENTS": "<:hypesquad_events:1235306710227484857>",
            "HOUSE_BRILLIANCE": "<:house_brilliance:1235306422414213210>",
            "HOUSE_BRAVERY": "<:HOUSE_BRAVERY:1235306361403736164>",
            "HOUSE_BALANCE": "<:HOUSE_BALANCE:1235306305447526431>",
            "EARLY_SUPPORTER": "<:early_supporter:1235305693968339016>",
            "TEAM_USER": "<:bust_in_silhouette_MU:1235306086442209340>",
            "VERIFIED_BOT": "<:verifiedBot:1235305835886940332>",
            "EARLY_VERIFIED_DEVELOPER": "<a:developer:1235305152995397734>"
        };
        var bot = {
            "true": "Bot",
            "false": "Human"
        };
        const userFlags = message.member.user.flags.toArray();
        const userlol = new MessageEmbed()
        .setAuthor({ name: `${mention.user.username}'s Information`, iconURL: mention.user.avatarURL()}) 
        .setThumbnail(usericon)
        .addField(`General Information`, `Name: \`\`${mention.user.username}\`\`\nDiscriminator: \`${mention.user.discriminator}\` \nNickname: \`${nick}\``)
        .addField(`Overview`, `Badges: ${userFlags.length ? userFlags.map(flag => flags[flag]).join(' ') : 'None'}\nType: ${bot[mention.user.bot]}`)
        .addField(`Server Relating Information`, `Roles: ${mention._roles[0] ? `<@&${mention._roles.join(">  <@&")}>` : `\`No roles\``}  \nKey Permissions: \`${finalPermissions.join(', ')}\``)
        .addField(`Misc Information`, `Created On: <t:${Math.round(mention.user.createdTimestamp/1000)}:R>\nJoined On: <t:${Math.round(mention.joinedTimestamp/1000)}:R>`)
        .setThumbnail(mention.user.avatarURL())
        .setFooter({ text: `Requested By: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true}) })
        .setTimestamp()
        .setColor(client.color);
        message.reply({ embeds: [userlol] })
    }
}