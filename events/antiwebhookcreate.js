const db = require('../core/db');

module.exports = async (client) => {

/* Anti Webhook Create */
client.on("webhookUpdate", async (webhook) => {
  const auditLog = await webhook.guild.fetchAuditLogs({ limit: 1, type: "WEBHOOK_CREATE" }).catch((_) => { });
  const logs = auditLog.entries.first();
  if(!logs) return;
  const { executor, target } = logs;

  await db.get(`${webhook.guild.id}_wl`).then(async (data) => {
    if(!data) return;
    const antinuke = await db.get(`${webhook.guild.id}_antinuke`);
    const trusted = data.whitelisted.includes(executor.id);

    if (executor.id === webhook.guild.ownerId) return;
    if (executor.id === client.user.id) return;
    if (antinuke !== true) return;
    if (trusted === true) return;
    try{
      await logs.target.delete().catch(e => null)
      await webhook.guild.members.ban(executor.id, {
        reason: "Webhook Create | Not Whitelisted"
      }).catch((_) => { });
    }catch(err){
      return;
    }
  });
});
}