const { message, client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");

module.exports = {
  name: "setup",
  aliases: ['set', 'setuprole'],
  category: 'owner',
  run: async (client, message, args) => {

const list = args[0];

    if(message.member.permissions.has("ADMINISTRATOR")){
} else {
        const embed = new MessageEmbed()
        .setDescription("You are not allowed to use these command !")
        .setColor("DARK_BUT_NOT_BLACK")
        return message.channel.send({embeds: [embed]})
    }

if(!list){
    const embed = new MessageEmbed()
    .setAuthor({name: `${message.author.tag}`, iconURL: message.author.avatarURL({dynamic: true})})
    .addFields(
        { name: '```.setup```', value: 'This command will show this page.', inline: false },
        { name: '```.setup reqrole```', value: 'It will setup the required role to run some custom role commands.', inline: false },
        { name: '```.setup official```', value: 'Sets the official role.', inline: false },
        { name: '```.setup friend```', value: 'Sets the friend role.', inline: false },
        { name: '```.setup guest```', value: 'Sets the guest role.', inline: false },
        { name: '```.setup vip```', value: 'Sets the vip role.', inline: false },
        { name: '```.setup girl```', value: 'Sets the girl role.', inline: false },
        { name: '```.setup config```', value: 'Shows the current config of Custom Role.', inline: false },
        { name: '```.setup reset```', value: 'Shows the current config of Custom Role.', inline: false },
        
    )
    .setColor("DARK_BUT_NOT_BLACK")
    .setFooter({text: 'Note: **At the time of providing Custom Roles, I`ll not provide the roles which have Administration Perms.**',iconURL: client.user.avatarURL})
    message.channel.send({embeds: [embed]})
}

if(list === 'reqrole'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
    const findData = await client.db.get(`reqrole_${message.guild.id}`) || "no"
await client.db.set(`reqrole_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`<:IconTick:1229080348277604456> | Successfully added ${role} as Required Role.`)
.setColor('DARK_BUT_NOT_BLACK')
message.channel.send({embeds: [embed]})
}

//
if(list === 'official'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }

await client.db.set(`official_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`<:IconTick:1229080348277604456> | Successfully added ${role} as Official Role.`)
.setColor('DARK_BUT_NOT_BLACK')
message.channel.send({embeds: [embed]})
}

if(list === 'friend'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }

await client.db.set(`friend_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`<:IconTick:1229080348277604456> | Successfully added ${role} as Friend Role.`)
.setColor('DARK_BUT_NOT_BLACK')
message.channel.send({embeds: [embed]})
}

//
if(list === 'guest'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
  
await client.db.set(`guest_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`<:IconTick:1229080348277604456> | Successfully added ${role} as Guest Role.`)
.setColor('DARK_BUT_NOT_BLACK')
message.channel.send({embeds: [embed]})
}

if(list === 'vip'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }
await client.db.set(`vip_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`<:IconTick:1229080348277604456> | Successfully added ${role} as Vip Role.`)
.setColor('DARK_BUT_NOT_BLACK')
message.channel.send({embeds: [embed]})
}

//
if(list === 'girl'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }

    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor('DARK_BUT_NOT_BLACK')
        return  message.reply({embeds: [embed]})
    }

await client.db.set(`girl_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`<:IconTick:1229080348277604456> | Successfully added ${role} as Girl Role.`)
.setColor('DARK_BUT_NOT_BLACK')
message.channel.send({embeds: [embed]})
}

//

if(list === 'config'){
    
    let req = await client.db.get(`reqrole_${message.guild.id}`) || "na"
    let official = await client.db.get(`official_${message.guild.id}`)  || "na"
    let frd = await client.db.get(`friend_${message.guild.id}`) || "na"
    let guest = await client.db.get(`guest_${message.guild.id}`) || "na"
    let girl = await client.db.get(`girl_${message.guild.id}`) || "na"
    let vip = await client.db.get(`vip_${message.guild.id}`) || "na"

   
if(req === 'na'){
    req = 'Nothing To Show'
} else {
    req = `<@.${req}>`

}
if(official === 'na'){
    official = 'Nothing To Show'
} else {
    official = `<@.${official}>`

}
if(frd === 'na'){
    frd = 'Nothing To Show'
} else {
    frd = `<@.${frd}>`

}
if(guest === 'na'){
    guest = 'Nothing To Show'
} else {
    guest = `<@.${guest}>`

}
if(vip === 'na'){
    vip = 'Nothing To Show'
} else {
    vip = `<@.${vip}>`

}
if(girl === 'na'){
    girl = 'Nothing To Show'
} else {
    girl = `<@.${girl}>`

}
    const embed = new MessageEmbed()
        .setColor('DARK_BUT_NOT_BLACK')
        .setTitle('Custom Role List')
        .addFields(
            { name: 'Required Role', value: `${req}`, inline: true },
            { name: 'Official Role', value: `${official}`, inline: true },
            { name: 'Friend Role', value: `${frd}`, inline: true },
            { name: 'Guest Role', value: `${guest}`, inline: true },
            { name: 'Vip Role', value: `${vip}`, inline: true },
            { name: 'Girl Role', value: `${girl}`, inline: true },

        )
    
       message.channel.send({embeds: [embed]})

    
}

if(list === 'reset'){
    await client.db.delete(`reqrole_${message.guild.id}`) 
   await client.db.delete(`official_${message.guild.id}`)  
    await client.db.delete(`friend_${message.guild.id}`) 
     await client.db.delete(`guest_${message.guild.id}`) 
   await client.db.delete(`girl_${message.guild.id}`)
    await client.db.delete(`vip_${message.guild.id}`) 

    const embed = new MessageEmbed()
    .setColor("DARK_BUT_NOT_BLACK")
.setDescription("<:IconTick:1229080348277604456> | All the setuped custom role has been reset")
message.channel.send({embeds: [embed]})
}
  }}