
function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms % 3600000 / 60000);
  let s = Math.floor(ms % 60000 / 1000);
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  let d = new Date(new Date + 3600000);
  let locale = 'ar';
  let week = d.toLocaleDateString(locale, { weekday: 'long' });
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender)
  let { money, joincount } = global.db.data.users[m.sender];
  let { exp, limit, level, role } = global.db.data.users[m.sender];
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
  let more = String.fromCharCode(8206);
  let readMore = more.repeat(850);
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    await conn.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });
    
const PLUTO = 'https://telegra.ph/file/5fc26caa7580823ce9dda.jpg'
const mentionId = m.key.participant || m.key.remoteJid;
    

conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `اختار اكواد فك الموجوده`,subtitle: "PLUTO",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: PLUTO } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                  contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: false,
                  },nativeFlowMessage: { buttons: [


                          {
                              "name": "cta_copy",
                                   "buttonParamsJson": "{\"display_text\":\"كود فك1\",\"id\":\"123456789\",\"copy_code\":\"Мой номер был запрещен без моего ведома или более ранних новостей, и мы надеемся, что вы отмените или удалите запрет на мой номер\"}"
                          },
                      {
                          "name": "cta_copy",
                                         "buttonParamsJson": "{\"display_text\":\"كود فك2\",\"id\":\"123456789\",\"copy_code\":\"الرجاء تشغيل رقمي وتفعيله علي خدمه الواتس اب حيث انه تم سرقه حسابي وقومت باسترجاع الرقم بعد سرقته والان وجدته محظور من خدمه الواتس اب نرجو منكم اعاده تنشيطه مره اخري ولن يتم به ما يخالف قوانين الواتس اب واستطيع مباشره اعمالي الخاصه(+20)\"}"
                                },
                            {
                          }
                      ]
                  }
              }
          }
      }
  }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['كود-فك']

export default handler;
