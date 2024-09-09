//https://via.placeholder.com/400x400/007bff/ffffff?text=Deploy+to+ToyStack


import fetch from 'node-fetch';

const handler = async (m, { command, usedPrefix, conn, args, text }) => {


if (!text) {
 conn.sendMessage(m.chat, {text: 'ادخل نص اولا'}, { quoted: m });
 conn.sendMessage(m.chat, { react: { text: '❗', key: m.key } });
 return
}


await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });


try{

let background;
let pp;
    try {
        pp = await conn.profilePictureUrl(who, 'image');
    } catch (e) {
        pp = 'https://telegra.ph/file/c0f8bb917592f4684820b.jpg';
    }


let img = https://via.placeholder.com/600x300/007bff/ffffff?text=${encodeURIComponent(text)};

await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

await conn.sendMessage(m.chat, {image: {url: img}}, {quoted: m});
 

 await conn.sendMessage(m.chat, { react: { text: '👌🏻', key: m.key } });
 
 } catch {
 await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
 }
 };
 
 handler.command = /^(بوستر)$/i;
export default handler;
