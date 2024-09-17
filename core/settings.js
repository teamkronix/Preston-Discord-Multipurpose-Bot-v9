const prefix = process.env.prefix || '.'
const status = `${prefix}help`;


module.exports = {
  bot: {
    info: {
      prefix: process.env.prefix || '.',
      token: process.env.token,
      invLink: 'https://discord.gg/teamkronix',
    },
    options: {
      founders: ['1092374628556615690'],
      privateMode: false,
    },
    presence: {
      name: process.env.statusText || status,
      type: 'streaming',
      url: 'https://twitch.tv/phv08'
    },
    credits: {
      developerId: '1092374628556615690',
      developer: 'venom',
    }
  }
}