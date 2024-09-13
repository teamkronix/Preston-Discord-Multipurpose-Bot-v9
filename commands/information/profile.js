const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "profile",
    aliases: ["badge", "pr"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        // GETTING USER
        const user = message.author;
        let badge = [];

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT Develoepr ID HERE TO SHOW OWNER BADGE
            badge.push("<:icon_developer:1224855354957893693> Developer");
        }

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT Owner ID HERE TO SHOW OWNER BADGE
            badge.push("<:Icons_Owner:1224855302382551050> Owner");
        }

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT Owner ID HERE TO SHOW OWNER BADGE
            badge.push("<:sr_developer:1225006721320353823> Co-Developer");
        }

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT DEVELOPER ID HERE TO SHOW MODERATOR BADGE
            badge.push("<:icons_discordhypesquard:1225006631150944277> Admin ");
        }
        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT STAFF ID HERE TO SHOW STAFF BADGE
            badge.push("<:icons_mod:1220288576781160479> Moderator");
        }

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT FRIENDS ID HERE TO SHOW FRIENDSBADGE
            badge.push("<:icons_staff:1220287976286715934> Staff ");
        }

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT VIP ID HERE TO SHOW VIP BADGE
            badge.push("<:icons_earlysupporter:1224855929640718447> Supporter");
        }

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT FRIENDS ID HERE TO SHOW FRIENDSBADGE
            badge.push("<:icons_vip:1224855751529336873> Vip ");
        }

        if ((user.id === "1175020913712975877")) {
            // PUT THE BOT DEVELOPER ID HERE TO SHOW MODERATOR BADGE
            badge.push("<:icons_friends:1224855805237657631> Friends ");
        }

        // YOU MAY ADD MORE LINES IF YOU WANT OR YOU MAY
        const badges = badge.join(` `)
            ? `${badge.join("\n")} `
            : "<:icons_human:1220287886105247775> Preston Users";
        // ITS EMBED LINE
        const embed = new MessageEmbed()
            .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
            .addFields({
                name: "Badges <a:icons:1224857106373410816> ",
                value: `${badges}`,
                inline: false,
            })
            .setThumbnail(user.avatarURL())
            .setTimestamp()
            .setFooter(`Credits : Venom`)
            .setColor(`CYAN`);
        // SENDING MESSAGE
        message.channel.send({ embeds: [embed] });
    },
};
