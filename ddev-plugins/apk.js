const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    pattern: "apk",
    alias: ["ps","downapk","playstore"],
    desc: "download playstore app",
    react: "📥",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, { 
        image: {
            url: icon,
        }, 
  caption: `    ◎━━━━━━━━━━━━━━━━━━━━━◍\n      📦 𝙳𝙳𝙴𝚅 𝙰𝙿𝙺 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 📦\n    ◎━━━━━━━━━━━━━━━━━━━━━◎\n\n  ┇🃏 *𝙰𝙿𝙿 𝙽𝙰𝙼𝙴 :* ${getname}\n  ┇♻️ *𝙻𝙰𝚃𝙴𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴 :* ${lastupdate}\n  ┇🎭 *𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙽𝙰𝙼𝙴 :* ${packagename}\n  ┇⚖️ *𝙰𝙿𝙺 𝚂𝙸𝚉𝙴 :* ${size}\n\n    ☉━━━━━━━━━━━♁━━━━━━━━━━━☉`,
    })
    return Void.sendMessage(citel.chat, { 
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
        caption: `*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(` *❌ 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙾𝙲𝙲𝚄𝚁𝚁𝙴𝙳 𝚆𝙷𝙸𝙻𝙴 𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝚁𝙴𝚀𝚄𝙴𝚂𝚃. 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽 𝙻𝙰𝚃𝙴𝚁!* ${err}`);
  }
})
  //---------------------------------------------------------------------------
