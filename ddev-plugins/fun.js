const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const { cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "question",
            desc: "Random Question.",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "truth",
            desc: "truth and dare(truth game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "dare",
            desc: "truth and dare(dare game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "fact",
        desc: "Sends fact in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*Fact:* ${data.fact}\n\n    *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`)   
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "quotes",
        desc: "Sends quotes in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
▧▬▬▬▬▬▬▬▬▬▬▬▷
║
╟ 🎁 *𝙲𝙾𝙽𝚃𝙴𝙽𝚃:* ${quoo.data.quote.body}
╟ 👤 *𝙰𝚄𝚃𝙷𝙾𝚁 :* ${quoo.data.quote.author}
║    
▧▬▬▬▬▬▬▬▬▬▬▬▷ `
return citel.reply(replyf)
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "define",
        desc: "urban dictionary.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            Word: ${text}
            Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`𝙽𝙾 𝚁𝙴𝚂𝚄𝙻𝚃 𝙵𝙾𝚁 ${text}`)
                    }
    }
)
