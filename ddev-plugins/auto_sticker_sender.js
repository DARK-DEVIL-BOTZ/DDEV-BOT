const { tlang,cmd } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const Config = require('../config')
const axios = require('axios')
// Put here your url with modified words and urls
const url = 'https://gist.github.com/DARK-DEVIL-BOTZ/851aef2dea90a2ad582a212be65081be/raw'

cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {
  let { data } = await axios.get(url)
  for (vr in data){
 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) await Void.sendMessage(citel.chat,{sticker: { url : data[vr]},package: 'DDEV-BOT'},{ quoted: citel })   
}
})