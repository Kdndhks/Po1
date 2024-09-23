let handler = async (m, { conn, command, text }) => {
let stupidity = `*نسبة الذكاء ☀*
*نسبة ذكاء ${text} هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*✏😅*
`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['stupidity <@tag/reply>']
handler.tags = ['fun']
handler.command = ['ذكاء', 'الذكاء', 'ذكي'] 
export default handler