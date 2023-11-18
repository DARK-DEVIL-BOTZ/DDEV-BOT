const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "true" },
welcome:{ type: String, default: "@pp *👋 𝙷𝙴𝚈,* @user \n*𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝙸𝙽* @gname \n*𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙼𝙱𝙴𝚁 𝙲𝙾𝚄𝙽𝚃* : @count 𝚝𝚑" },
goodbye:{ type: String, default: "@pp *😑 𝚆𝙴 𝙷𝙰𝚅𝙴 𝙻𝙾𝚂𝚃 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝙳𝚄𝚂𝚃𝚈 𝙼𝙴𝙼𝙱𝙴𝚁 𝙶𝙾 𝙰𝙷𝙴𝙰𝙳 𝙼𝙾𝚃𝙷𝙴𝚁 𝙵𝚄𝙲𝙺𝙴𝚁🖕.*\n𝚄𝚂𝙴𝚁 : @user" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
