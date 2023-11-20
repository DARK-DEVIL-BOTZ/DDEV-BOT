const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("xSbX7s8hXdO-RNug5HpNiLhkAQdEbQFT");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('𝙿𝙻𝙴𝙰𝚂𝙴 𝚀𝚄𝙾𝚃𝙴 𝙰𝙽𝚈 𝚃𝙴𝚇𝚃 𝚃𝙾 𝙶𝙴𝚃 𝙻𝙸𝙽𝙺!')
        let data = await pastebin.createPaste(citel.quoted.text, "Secktor-Pastebin")
        citel.reply('𝙷𝙴𝚁𝙴 𝙸𝚂 𝚈𝙾𝚄𝚁 𝙻𝙸𝙽𝙺!\n'+data)
    }
);
