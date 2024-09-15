const { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));

const handler = async (m, { conn }) => {
  // تحقق مما إذا كانت الرسالة تحتوي على اقتباس
  if (!m.quoted) throw 'يرجى تحديد الرسالة الصوتية أولاً';
  
  // تحقق مما إذا كانت الرسالة المقتبسة عبارة عن رسالة صوتية
  const msg = m.quoted.message;
  const type = Object.keys(msg)[0];
  if (type !== 'audioMessage') throw 'الرسالة المحددة ليست رسالة صوتية';
  
  // تحميل محتوى الرسالة الصوتية
  const media = await downloadContentFromMessage(msg[type], 'audio');
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }

  // إرسال الرسالة الصوتية كملف إلى الدردشة
  await conn.sendFile(m.chat, buffer, 'voice.mp3', '', m, { ptt: true }); // ptt: true 

};

handler.help = ['كشف صوتي'];
handler.tags = ['tools'];
handler.command = /^(اكشفلي|readaudio|readaudio)$/i;

export default handler;
