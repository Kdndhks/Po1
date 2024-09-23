//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ *منشن شخص ما*\n\n📌 مثال : ${usedPrefix + command} @المنشن`

conn.reply(m.chat, `*تم اغتيال ● @${who.split`@`[0]} بنجاح 💀🔪🤫*`, m, { mentions: [who] })

}
handler.help = ['dead <@tag>']
handler.tags = ['fun']
handler.command = ['اقتل', 'اغتال', 'اغتيال', 'قتل']
handler.group = true 

export default handler


/* let handler = async (m, { conn, command, text }) => {
  if (!text) throw `*منشن الشخص​*`
let dead = `*تم اغتيال ● ${text} بنجاح 💀🔪🤫*`.trim()
m.reply(dead, null, { mentions: conn.parseMention(dead) })}
handler.help = ['dead <@tag/reply>']
handler.tags = ['fun']
handler.command = ['اقتل', 'اغتال', 'اغتيال', 'قتل'] 
export default handler
*/