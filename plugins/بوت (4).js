import fetch from "node-fetch"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "🛰️ *أدخل طلبك للرد عليك بالذكاء*

⚡ مثال كالآتي: : \n بوت مكتشف الجاذبيه الارضيه
 .بوت معلومه سريعه عن الاسلام"
    await m.reply(wait)
    try {
        let res = await ChatGpt(text)
        await m.reply(res.content)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["gptvoc"]
handler.tags = ["ai"];
handler.command = /^(بوت)$/i
handler.register = handler.limit = false

export default handler

/* New Line */

const ChatGpt = async (prompt) => {
    const url = "https://apps.voc.ai/api/v1/plg/prompt_stream";

    try {
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt
            }),
        });

        const inputString = await response.text();
        const dataArray = inputString.split( \n\n );

        const regex = /data: (\{.*?\})/g;
        const jsonMatches = [];
        let match;

        while ((match = regex.exec(dataArray[0])) !== null) {
            jsonMatches.push(match[1]);
        }

        const oregex = /"data": ({.*?})/;
        const endsTrueArray = jsonMatches.slice(-1);
        const output = endsTrueArray[0].match(oregex);

        return output ? JSON.parse(output[1]) : null;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
