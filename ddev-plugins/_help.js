const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/src')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "ddev",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "📑",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("🙉 𝙷𝙴𝚈 *${pushname}* 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙰𝚁𝙴 𝙽𝙾𝚃 𝙿𝚁𝙾𝙶𝚁𝙰𝙼𝙼𝙴𝙳! 𝚃𝚈𝙿𝙴 *${prefix}ddev* 𝚃𝙾 𝙶𝙴𝚃 𝙼𝚈 𝙵𝚄𝙻𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃!");
                else arr.push(`*💸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 :* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*📦 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 :* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🔰 𝙰𝙻𝙸𝙰𝚂:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*📄 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 :* ${cmd.desc}`);
                if (cmd.use) arr.push(`*❇️ 𝚄𝚂𝙰𝙶𝙴 :*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/Colombo')
                    .locale('id')
                const date = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `      😇 𝘏𝘌𝘓𝘓𝘖 ` + fancytext(citel.pushName.split(' ')[0], 58) + `,`
                str += '' + `\n
     👋 𝘐 𝘈𝘔 *𝘋𝘋𝘌𝘝 𝘉𝘖𝘛*. 𝘈 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘖𝘛 𝘊𝘙𝘌𝘈𝘛𝘌𝘋 𝘉𝘠 *𝘋𝘈𝘙𝘒 𝘋𝘌𝘝𝘐𝘓* 𝘛𝘖 𝘋𝘖 𝘌𝘝𝘌𝘙𝘠𝘛𝘏𝘐𝘕𝘎 𝘛𝘏𝘈𝘛 𝘐𝘚 𝘗𝘖𝘚𝘚𝘐𝘉𝘓𝘌 𝘖𝘕 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘈𝘚𝘌𝘋 𝘖𝘕 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘔𝘜𝘓𝘛𝘐 𝘋𝘌𝘝𝘐𝘊𝘌(𝘔𝘋) 𝘚𝘜𝘗𝘗𝘖𝘙𝘛.✌️
    
   ╔═════ 💻 *𝚂𝙴𝚁𝚅𝙴𝚁* 💻 ═════════➤
   ║
   ║  *⏳𝚁𝚄𝙽𝚃𝙸𝙼𝙴* : ${runtime(process.uptime())}
   ║  *📼𝙼𝙴𝙼𝙾𝚁𝚈* : ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
   ║ 
   ╟━━━━ 🤖 *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* 🤖 ━━━━━━━━➤
   ║
   ║  *🎻𝙿𝙴𝚁𝚂𝙾𝙽𝙾𝙻𝙸𝚃𝚈 :* 𝙳𝙳𝙴𝚅
   ║  *👨‍💼𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 :* 𝙳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻
   ║  *🧬𝙱𝙾𝚃 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 :* v.2.0.0
   ║  *🖥️𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 :* 𝙰𝚆𝚂 𝚅𝙿𝚂
   ║
   ╚═════════════════════════➤\n
` + ''
                for (const category in cmds) 
                {
                   str += ` ┏ ☁ *${tiny(category)}* ☁ ━━━➢\n` ;                
                  if(text.toLowerCase() == category.toLowerCase()){ str = ` ┏ ☁ *${tiny(category)}* ☁ ━━━➢\n` ;      
                        for (const plugins of cmds[category]) { str += ` ┃► ${fancytext(plugins,1)}\n` ; }
                        str += ` ┗━━━━━━━━━━━━━☉⚟\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += ` ┃► ${fancytext(plugins,1)}\n` ; }
                         str += ` ┗━━━━━━━━━━━━━☉⚟\n`  ; 
                   }
  
                }
                str+= `\n    *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`
                let buttonMessaged = {
                    video: { url: THUMB_VIDEO },
                    gifPlayback:true,
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel});
            }
        }
    )
    
    
    //---------------------------------------------------------------------------
Secktor.cmd({
    pattern: "cmd",
    desc: "cmd1",
    category: "general"
},
async (Void, citel) => {
    const { commands } = require('../lib');
    let str = `      😇 𝘏𝘌𝘓𝘓𝘖 ` + fancytext(citel.pushName.split(' ')[0], 58) + `,`
    str += `\n
      👋 𝘐 𝘈𝘔 *𝘋𝘋𝘌𝘝 𝘉𝘖𝘛*. 𝘈 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘖𝘛 𝘊𝘙𝘌𝘈𝘛𝘌𝘋 𝘉𝘠 *𝘋𝘈𝘙𝘒 𝘋𝘌𝘝𝘐𝘓* 𝘛𝘖 𝘋𝘖 𝘌𝘝𝘌𝘙𝘠𝘛𝘏𝘐𝘕𝘎 𝘛𝘏𝘈𝘛 𝘐𝘚 𝘗𝘖𝘚𝘚𝘐𝘗𝘓𝘌 𝘖𝘕 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘈𝘚𝘌𝘋 𝘖𝘕 𝘞𝘏𝘈𝘛𝘴𝘈𝘱𝘱 𝘔𝘜𝘭𝘵𝘐 𝘋𝘌𝘝𝘐𝘊𝘌(𝘔𝘋) 𝘚𝘜𝘗𝘗𝘖𝘙𝘛.✌️
    
   ╔═════ 💻 *𝚂𝙴𝚁𝚅𝙴𝚁* 💻 ═════════➤
   ║
   ║  *⏳𝚁𝚄𝙽𝚃𝙸𝙼𝙴* : ${runtime(process.uptime())}
   ║  *📼𝙼𝙴𝙼𝙾𝚁𝚈* : ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
   ║ 
   ╟━━━━ 🤖 *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* 🤖 ━━━━━━━━➤
   ║
   ║  *🎻𝙿𝙴𝚁𝚂𝙾𝙽𝙾𝙻𝙸𝚃𝚈 :* 𝙳𝙳𝙴𝚅
   ║  *👨‍💼𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 :* 𝙳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻
   ║  *🧬𝙱𝙾𝚃 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 :* v.2.0.0
   ║  *🖥️𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 :* 𝙰𝚆𝚂 𝚅𝙿𝚂
   ║
   ╚═════════════════════════➤\n\n`

   for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern == undefined) continue
        str += `🔹${i+1} *${fancytext(commands[i].pattern, 1)}*\n`
    }
    str+= `\n    *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`

    // Modify this part to send the local MP4 video file as GIF
    return await Void.sendMessage(citel.chat, { video: { url: THUMB_VIDEO }, gifPlayback:true, caption: str })
})

    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "🧑‍💻",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'DARK DEVIL',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii, I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*🙉 𝙷𝙴𝚈 *${pushname}* 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙰𝚁𝙴 𝙽𝙾𝚃 𝙿𝚁𝙾𝙶𝚁𝙰𝙼𝙼𝙴𝙳! 𝚃𝚈𝙿𝙴 *${prefix}ddev* 𝚃𝙾 𝙶𝙴𝚃 𝙼𝚈 𝙵𝚄𝙻𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃!*");
        else arr.push(`*🖱️ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 :* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*📍 𝚃𝚈𝙿𝙴 :* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨ 𝙵𝙸𝙻𝙴 𝙽𝙰𝙼𝙴 : ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
