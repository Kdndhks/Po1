import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused7} *${usedPrefix + command} اسـتـا*`;
const prohibited = ['سكس', 'نودز']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('*اي الـلـي بـتـبـحـث عـلـيـه ده يـسـطـا عـيـب انـا بـوت مـحـتـرم*')      
try {
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendButton(m.chat, `${mid.buscador}: ${text}`, wm, link, [['كـمـان صــوره', `/imagen ${text}`]], null, null, m )
//conn.sendFile(m.chat, link, 'error.jpg', `💞 ${mid.buscador}: ${text}`, m)
} catch (e) {
console.log(`❗❗ خطأ في ${usedPrefix + command} ❗❗`);
console.log(e)
}}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen|jpg|صوره)$/i
export default handler
