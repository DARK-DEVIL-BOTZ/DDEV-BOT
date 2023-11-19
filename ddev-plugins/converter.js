const axios = require('axios')
const { sck1, tiny, fancytext, listall,cmd,ffmpeg } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

    //---------------------------------------------------------------------------
    cmd({
        pattern: "photo",
        desc: "Makes photo of replied sticker.",
        category: "converter",
        use: '<reply to any gif>',
        filename: __filename
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!citel.quoted) return citel.reply(`𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝚂𝚃𝙸𝙲𝙺𝙴𝚁!`)
        let mime = citel.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
            let buffer = fs.readFileSync(media)
            Void.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
          
         fs.unlink(media, (err) => {
         if (err) { return console.error('𝙵𝙸𝙻𝙴 𝙽𝙾𝚃 𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙵𝚁𝙾𝙼 𝚃𝙾𝙿𝙷𝙾𝚃𝙾 𝙰𝚃 : ' , media,'\n 𝚆𝙷𝙸𝙻𝙴 𝙴𝚁𝚁𝙾𝚁 : ' , err);  }
         else return console.log('𝙵𝙸𝙻𝙴 𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙸𝙽 𝚃𝙾𝙿𝙷𝙾𝚃𝙾 𝙰𝚃 : ' , media);
         });
         
        })
        
} else return citel.reply ("```𝚂𝙾𝚁𝚁𝚈 𝙿𝙻𝙴𝙰𝚂𝙴, 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰 𝙽𝙾𝙽 𝙰𝙽𝙸𝙼𝙰𝚃𝙴𝙳 𝚂𝚃𝙸𝙲𝙺𝙴𝚁!```")
    }
)
//---------------------------------------------------------------------------

cmd({
         pattern: "vv",
         alias : ['viewonce','retrive'],
         desc: "Flips given text.",
         category: "misc",
         use: '<query>',
         filename: __filename
     },
     async(Void, citel, text) => {
try {
const quot = citel.msg.contextInfo.quotedMessage.viewOnceMessageV2;
if(quot)
{
if(quot.message.imageMessage) 
{ console.log("Quot Entered") 
   let cap =quot.message.imageMessage.caption;
   let anu = await Void.downloadAndSaveMediaMessage(quot.message.imageMessage)
   return Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
}
if(quot.message.videoMessage) 
{
   let cap =quot.message.videoMessage.caption;
   let anu = await Void.downloadAndSaveMediaMessage(quot.message.videoMessage)
   return Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
}
 
} 
       
}  
     
catch(e) {  console.log("error" , e ) }     

       
if(!citel.quoted) return citel.reply("```𝚂𝙾𝚁𝚁𝚈, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚁𝙴𝙿𝙻𝚈 𝙰 𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!```")           
if(citel.quoted.mtype === "viewOnceMessage")
{ console.log("ViewOnce Entered") 
 if(citel.quoted.message.imageMessage )
{ 
  let cap =citel.quoted.message.imageMessage.caption;
  let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.imageMessage)
  Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
}
else if(citel.quoted.message.videoMessage )
{
  let cap =citel.quoted.message.videoMessage.caption;
  let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.videoMessage)
  Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
}

}
else return citel.reply("```𝙾𝙷𝙷, 𝚃𝙷𝙸𝚂 𝙸𝚂 𝙽𝙾𝚃 𝙰 𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!```")

})    //---------------------------------------------------------------------------
cmd({
            pattern: "quotely",
            desc: "Makes Sticker of quoted text.",
            alias: ["q"],
            category: "converter",
            use: '<reply to any message.>',
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("𝙿𝙻𝙴𝙰𝚂𝙴 𝚀𝚄𝙾𝚃𝙴/𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!");
            let textt = citel.quoted.text;
            let pfp;
            try {
                pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
            } catch (e) {
                pfp = THUMB_IMAGE;
            }
            let todlinkf = ["#FFFFFF", "#000000"];
            let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
            let username = await sck1.findOne({ id: citel.quoted.sender })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = Void.getName(citel.quoted.sender)
            }
            let body = {
                type: "quote",
                format: "png",
                backgroundColor: todf,
                width: 512,
                height: 512,
                scale: 3,
                messages: [{
                    avatar: true,
                    from: {
                        first_name: tname,
                        language_code: "en",
                        name: tname,
                        photo: {
                            url: pfp,
                        },
                    },
                    text: textt,
                    replyMessage: {},
                }, ],
            };
            let res = await axios.post("https://bot.lyo.su/quote/generate", body);
            let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
            return citel.reply(img,{packname:'Izuku',author:'Quotely'},"sticker")

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "fancy",
            desc: "Makes stylish/fancy given text",
            category: "converter",
            use: '46 Vajira',
            react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "👾 𝙵𝙰𝙽𝙲𝚈 𝚃𝙴𝚇𝚃 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙾𝚁\n\n𝙴𝚇𝙰𝙼𝙿𝙻𝙴: .fancy 46 ddev\n\n"
                );
                listall("Secktor Bot").forEach((txt, num) => {
                    text += `${(num += 1)} ${txt}\n`;
                });
                return await citel.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            citel.reply(fancytextt)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tiny",
            desc: "Makes url tiny.",
            category: "converter",
            use: '<url>',
            react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('𝙶𝙸𝙼𝙼𝙴 𝙰 𝙻𝙸𝙽𝙺!')
            try {
                link = text.split(" ")[0];
                anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                citel.reply(`⛓️ *𝚈𝙾𝚄𝚁 𝚂𝙷𝙾𝚁𝚃𝙴𝙽𝙴𝙳 𝚄𝚁𝙻* :\n\n${anu.data}`);
            } catch (e) {
                console.log(e);
            }
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "circle",
        alias: ["circlestic","circlesticker","cs"],
        desc: "Makes sticker of replied image/video.",
        category: "sticker",
filename: __filename,
        use: '<reply to any image/video.>'
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`*𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝙸𝙼𝙰𝙶𝙴 𝙾𝚁 𝚅𝙸𝙳𝙴𝙾!*`);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
       if (mime =="imageMessage" || mime =="stickerMessage") {
            let media = await citel.quoted.download();
            let sticker = new Sticker(media, {
                pack: pack, 
                author: author, 
                type: StickerTypes.CIRCLE ,
                categories: ["🤩", "🎉"], 
                id: "12345", 
                quality: 75, 
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        }else return citel.reply("*𝚂𝙾𝚁𝚁𝚈, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝙸𝙼𝙰𝙶𝙴!*");

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "crop",
        alias: ["cropstic","csticker","cropsticker"],
        desc: "Makes sticker of replied image/video.",
        category: "sticker",
filename: __filename,
        use: '<reply to any image/video.>'
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`*𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝙸𝙼𝙰𝙶𝙴 𝙾𝚁 𝚅𝙸𝙳𝙴𝙾!*`);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
        if (mime =="imageMessage"  || mime =="stickerMessage") {
            let media = await citel.quoted.download();
            let sticker = new Sticker(media, {
                pack: pack, 
                author: author, 
                type: StickerTypes.CROPPED,
                categories: ["🤩", "🎉"], 
                id: "12345", 
                quality: 75, 
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        }else return citel.reply("*𝚂𝙾𝚁𝚁𝚈, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝙸𝙼𝙰𝙶𝙴!*");

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "round",
        alias: ["roundstic","roundsticker"],
        desc: "Makes sticker of replied image/video.",
        category: "sticker",
filename: __filename,
        use: '<reply to any image/video.>'
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`*𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝙸𝙼𝙰𝙶𝙴 𝙾𝚁 𝚅𝙸𝙳𝙴𝙾!*`);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
       if (mime =="imageMessage" || mime =="stickerMessage") {
            let media = await citel.quoted.download();
            let sticker = new Sticker(media, {
                pack: pack,
                author: author,
                type: StickerTypes.ROUNDED ,
                categories: ["🤩", "🎉"], 
                id: "12345", 
                quality: 75, 
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        }else return citel.reply("*𝚂𝙾𝚁𝚁𝚈, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰𝙽𝚈 𝙸𝙼𝙰𝙶𝙴!*");

    }
)
cmd({
    pattern: "toaudio",
    alias:['mp3','tomp3'],
    desc: "changes type to audio.",
    category: "converter",
    use: '<reply to any Video>',
    filename: __filename
},
async(Void, citel, text) => {
    if (!citel.quoted) return citel.reply(`𝙶𝙸𝙼𝙼𝙴 𝙰𝙽𝚈 𝚅𝙸𝙳𝙴𝙾!`);
    let mime = citel.quoted.mtype
if (mime =="audioMessage" || mime =="videoMessage")
{
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
     const { toAudio } = require('../lib');
     let buffer = fs.readFileSync(media);
    let audio = await toAudio(buffer);
    Void.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel });
 

fs.unlink(media, (err) => {
if (err) { return console.error('𝙵𝙸𝙻𝙴 𝙽𝙾𝚃 𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙵𝚁𝙾𝙼 𝚃𝙾𝙰𝚄𝙳𝙸𝙾 𝙰𝚃 : ' , media,'\n 𝚆𝙷𝙸𝙻𝙴 𝙴𝚁𝚁𝙾𝚁 : ' , err);  }
else return console.log('𝙵𝙸𝙻𝙴 𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙸𝙽 𝚃𝙾𝙰𝚄𝙳𝙸𝙾 𝙼𝙿3 𝙰𝚃 : ' , media);
});

}
else return citel.reply ("```𝙿𝙻𝙴𝙰𝚂𝙴 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!```")
}
)
