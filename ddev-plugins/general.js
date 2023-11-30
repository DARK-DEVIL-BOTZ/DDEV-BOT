const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------

cmd({
    pattern: "chat",
    alias: ['gpt'],
    desc: "chat with an AI(GPT)",
    category: "AI",
    use: '<Hii, how can I help you>',
    filename: __filename,
},
async (Void, citel, text) => {
    let zx = text.length;
    if (zx < 8) {
        try {
            let { data } = await axios.get(`http://api.brainshop.ai/get?bid=179125&key=NBehLa7z6HBV2SUJ&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            citel.reply(data.cnt);
        } catch (error) {
            console.error("Error in Brainshop API call:", error);
            citel.reply("Error in processing your request.");
        }
        return;
    }

    if (!text) {
        citel.reply(`𝙷𝙴𝚈 𝚃𝙷𝙴𝚁𝙴! ${citel.pushName}. 𝚃𝙴𝙻𝙻 𝚃𝙾 𝙳𝙳𝙴𝚅, 𝙰𝙱𝙾𝚄𝚃 𝚈𝙾𝚄𝚁𝚂𝙴𝙻𝙵! `);
        return;
    }

    const response = fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You" }, { role: "user", content: text }],
        }),
    });

    response.then(async (res) => {
        const data = await res.json();
        console.log("GPT RESPONSE:", data);
        if (!data.choices || data.choices.length === 0) {
            citel.reply("*𝙸𝙽𝚅𝙰𝙻𝙸𝙸𝙳 𝙲𝙷𝙰𝚃𝙶𝙿𝚃 𝙰𝙿𝙸 𝙺𝙴𝚈, 𝙿𝙻𝙴𝙰𝚂𝙴 𝙸𝙽𝚂𝙴𝚁𝚃 𝙰𝙿𝙸 𝙺𝙴𝚈*");
        } else {
            citel.reply(data.choices[0].message.content);
        }
    }).catch((error) => {
        console.error("Error in OpenAI API call:", error);
        citel.reply("Error in processing your request.");
    });
});


cmd({
    pattern: "dalle",
    alias : ['dall','dall-e'],
    desc: "Create Image by AI",
    category: "AI",
    use: '<an astronaut in mud.>',
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => 
{
//if (!isCreator) return citel.reply(tlang().owner)
if (Config.OPENAI_API_KEY=='') return citel.reply('𝙿𝙻𝙴𝙰𝚂𝙴 𝙸𝙽𝚂𝙴𝚁𝚃 OPENAI_API_KEY \n𝙿𝙻𝙴𝙰𝚂𝙴 𝙲𝚁𝙴𝙰𝚃𝙴 𝙾𝙿𝙴𝙽𝙰𝙸 𝙰𝙿𝙸 𝙺𝙴𝚈 𝙵𝚁𝙾𝙼 𝙶𝙸𝚅𝙴𝙽 𝙻𝙸𝙽𝙺 \nhttps://platform.openai.com/account/api-keys');
if (!text) return citel.reply(`*𝙶𝙸𝙼𝙼𝙴 𝙰 𝚀𝚄𝙴𝚁𝚈 𝚃𝙾 𝙶𝙴𝚃 𝙳𝙰𝙻𝙻-𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝙲𝙴!*`); 
const imageSize = '256x256'
const apiUrl = 'https://api.openai.com/v1/images/generations';
const response = await fetch(apiUrl, {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${Config.OPENAI_API_KEY}`
},
body: JSON.stringify({
  model: 'image-alpha-001',
  prompt: text,
  size: imageSize ,
  response_format: 'url'
})
});

const data = await response.json();
let buttonMessage = {
    image:{url:data.data[0].url},
    caption : '✅ *𝚈𝙾𝚄𝚁 𝙳𝙰𝙻𝙻-𝙴 𝚁𝙴𝚂𝚄𝙻𝚃𝚂!*'

}

Void.sendMessage(citel.chat,{image:{url:data.data[0].url}})
}
)

//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
	    react: "🎁",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/DARK-DEVIL-BOTZ/DDEV-BOT')
        let cap = `*✒️ _𝙳𝙳𝙴𝚅 𝚂𝙲𝚁𝙸𝙿𝚃_ 📃*\n\n*🌟 𝚃𝙾𝚃𝙰𝙻 𝚂𝚃𝙰𝚁𝚂*: ${data.stargazers_count} ✨\n*🍴 𝚃𝙾𝚃𝙰𝙻 𝙵𝙾𝚁𝙺𝚂*: ${data.forks_count} 𝙵𝙾𝚁𝙺𝚂\n*🎓 𝙶𝙸𝚃𝙷𝚄𝙱*: https://github.com/DARK-DEVIL-BOTZ/DDEV-BOT\n\n😊 𝙳𝚘𝚗𝚝 𝙵𝚘𝚛𝚐𝚎𝚝 𝚃𝚘 𝙵𝚘𝚕𝚕𝚘𝚠 𝙼𝚎 𝙾𝚗 *𝙶𝙸𝚃𝙷𝚄𝙱* 𝙰𝚗𝚍 𝙶𝚒𝚟𝚎 𝙰 ⭐ 𝚃𝚘 𝙼𝚢 𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴅᴇᴠɪʟ",
                    body: "ᴼᶠᶠᴵᶜᴵᴬᴸ ᴰᴰᴱⱽ ᴿᴱᴾᴼ",
                    thumbnail: `https://telegra.ph/file/7a4d07df9942aef1d27b0.jpg`,
                    mediaType: 4,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
	    react: "🎰",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
┏━━━━━━༺*${tlang().title}*༻━━━━━━━⫸
┃ 
┃☞📈 *𝚂𝙿𝙴𝙴𝙳* : ${latensie.toFixed(4)} 𝚖𝚜
┃☞⏳ *𝚄𝙿𝚃𝙸𝙼𝙴* : ${runtime(process.uptime())}
┃☞🧬 *𝚅𝙴𝚁𝚂𝙸𝙾𝙽* : 2.0.0
┃☞👤 *𝙾𝚆𝙽𝙴𝚁* : ${Config.ownername}
┃☞📃 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽* : Elevate your WhatsApp
┃ experience with DDEV-BOT, A multi-device bot by Dark Devil.
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━⫸ `;
        let buttonMessaged = {
            video: {
                url: THUMB_VIDEO},
                gifPlayback:true,
                caption: ter,
                footer: tlang().footer,
                headerType: 4,
                contextInfo: {
                externalAdReply: {
                    title: `*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`,
                    body: `ᴮᴼᵀ ˢᵀᴬᵀᵁˢ`,
                    thumbnail: `https://telegra.ph/file/7a4d07df9942aef1d27b0.jpg`,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------
