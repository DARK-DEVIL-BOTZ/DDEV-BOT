const { tlang,cmd } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const Config = require('../config')
const axios = require('axios')
// Put here your url with modified words and urls
const url = 'https://gist.github.com/prabathLK/fbd8017006fc4000dc82403d443ecd9b/raw'

cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {
  let { data } = await axios.get(url)
  for (vr in data){
 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) await Void.sendMessage(citel.chat,{sticker: { url : data[vr]},package: '𝙼𝙰𝙳𝙴 𝙱𝚈 𝙳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻'},{ quoted: citel })   
}
})
