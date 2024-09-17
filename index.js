const {
  Client,
  Collection,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
  WebhookClient,
  Intents,
} = require("discord.js");
const { keep_alive } = require("./keep_alive");
const client = new Client({ intents: 32767 });
const wait = require("wait");
const { Database } = require("quickmongo");
const settings = require("./core/settings");
const web = new WebhookClient({ url: "" });
const phin = require("phin").unpromisified;
const chalk = require("chalk");
const { readdirSync } = require("fs");
const util = require("./handler/util.js");
const GiveawayManager = require("./handler/GiveawayManager");
const config = require("./config");
const data = require("./config");

client.emoji = {
  tick: "<:IconTick:1229080348277604456>",
  cross: "<:icons_no:1229080418922532976>",
  dot: "<a:dot:1234860701302919168>",

  giveaway: "<:icon_giveaway:1234814041717739613>",
};

const db = new Database("");
db.connect();
require(`./core/db.js`);

client.giveawaysManager = new GiveawayManager(client);
client.commands = new Collection();
client.slashCommands = new Collection();
client.categories = readdirSync("./commands/");
client.util = new util(client);
client.db = db;
client.color = "2f3136";
require("./database/connect")();

readdirSync("./events/").forEach((file) => {
  let eventName = file.split(".")[0];
  require(`./events/${file}`)(client);
  console.log(`[ EVENTS ] Client event named ${eventName} loaded`);
});

require("./handler")(client);

client.login(data.token);
module.exports = client;

process.on("unhandledRejection", async (err) => {
  console.error(err);
});
process.on("uncaughtException", async (er) => {
  console.error(er);
});
