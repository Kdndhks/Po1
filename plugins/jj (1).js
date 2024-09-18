/*

- Agradecimiento a la comunidad de "WSApp • Developers"
 * https://chat.whatsapp.com/FaQunmlp9BmDRk6lEEc9FJ
- Agradecimiento especial a Carlos (PT) por los codigos de interactiveMessage (botones)
- Agradecimiento a Darlyn1234 por la estructura de uso en este codigo y quoted
 * https://github.com/darlyn1234
- Adaptacion de imagen en tipo lista, codigo y funcionamiento por BrunoSobrino
 * https://github.com/BrunoSobrino

*/
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix: prefijo }) =>  {
    const device = await getDevice(m.key.id);

  if (!text) throw `⚠️ *اكتب الي بتبحث عنه في يوتيوب*\n\n
  *مثال*\n*سورة الفاتحه*`;

  if (device !== 'desktop' || device !== 'web') {      

  const results = await yts(text);
  const videos = results.videos.slice(0, 20);
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  var messa = await prepareWAMessageMedia({ image: {url: randomVideo.thumbnail}}, { upload: conn.waUploadToServer })
  const interactiveMessage = {
    body: { text: `*نتائج البحث* ${results.videos.length}\n\n\n\n*—◉ Video aleatorio:*\n*-› وصف:* ${randomVideo.title}\n\n\n\n*-› قناه:* ${randomVideo.author.name}\n\n*-› مشاهدات:* ${randomVideo.views}\n\n*-› رابط الفديو:* ${randomVideo.url}\n\n\n*-› رابط الصوره:* ${randomVideo.thumbnail}\n\n\n\n> *❎انا غير مسؤل عن موسيقى او اي شي حرام*`.trim() },
    footer: { text: `${global.wm}`.trim() },  
      header: {
          title: `*>بحث ستيفن*\n`,
          hasMediaAttachment: true,
          imageMessage: messa.imageMessage,
      },
    nativeFlowMessage: {
      buttons: [
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'اختار الفيديو من هنا',
            sections: videos.map((video) => ({
              title: video.title,
              rows: [
                {
                  header: video.title,
                  title: video.author.name,
                  description: 'صوت🎧',
                  id: `${prefijo}mp3.1 ${video.url}`
                },
                {
                header: video.title,
                 title: video.author.name,
                 description: 'ملف صوتي🎞',
                  id: `${prefijo}mp3.2 ${video.url}`
                  },
                  {
                  header: video.title,
                      title: video.author.name,
                       description: 'ملف فديو',
                        id: `${prefijo}mp4.2 ${video.url}`
                        },
                        {
                  header: video.title,
                  title: video.author.name,
                  description: 'فديو📽',
                  id: `${prefijo}mp4.1 ${video.url}`
                }
              ]
            }))
          })
        }
      ],
    messageParamsJson: ''
    },
  };
      

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

  } else { 
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ *رابط الفديو يا عسل* ${v.url}



↳ 🕒 *مده الفديو يا سكر* ${v.timestamp}



↳ 📥 *منذ* ${v.ago}\n\n



↳ 👁 *مشاهدات* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'error.jpg', teks.trim(), m);      
  }    
};
handler.help = ['ytsearch <texto>'];
handler.tags = ['search'];
handler.command = /^(ytsearch|يوتيوب|searchyt|buscaryt|videosearch|audiosearch)$/i;
export default handler;
