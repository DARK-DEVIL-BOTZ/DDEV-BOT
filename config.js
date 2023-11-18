const fs = require('fs-extra');

if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname + '/config.env' });

//═══════════════════════════════════════════[𝚁𝙴𝚀𝚄𝙸𝚁𝙴𝙳 𝚅𝙰𝚁𝙸𝙰𝙱𝙻𝙴𝚂]═══════════════════════════════════════════\\
global.owner = process.env.OWNER_NUMBER.split(",");
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ddevofc:darkdevil@cluster0.4vtn9lo.mongodb.net/?retryWrites=true&w=majority";
global.port = process.env.PORT || 5000;
global.email = 'ddevofc@gmail.com';
global.github = 'https://github.com/DARK-DEVIL-BOTZ/DDEV-BOT';
global.location = 'Kaluthara, Sri Lanka';
global.gurl = 'https://malindunimsara.pages.dev';
global.sudo = process.env.SUDO || '94703892615';
global.devs = '94703892615';
global.website = 'https://github.com/DARK-DEVIL-BOTZ/DDEV-BOT';
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg';

//════════════════════════════════════════════════════════════════════════════════════════════════════\\

module.exports = {
  botname: process.env.BOT_NAME === undefined ? '𝙳𝙳𝙴𝚅 𝙱𝙾𝚃' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝙳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻' : process.env.OWNER_NAME,
  sessionName: process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author: process.env.PACK_INFO.split(";")[0] === undefined ? '🌹⃝⃘̉̉̉̉̉̉𝙳𝙳𝙴𝚅 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂' : process.env.PACK_INFO.split(";")[0],
  auto_read_status: process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname: process.env.PACK_INFO.split(";")[1] === undefined ? '𝙱𝚈 𝙳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻۝⃟̥̩̩̩̥' : process.env.PACK_INFO.split(";")[1],
  autoreaction: process.env.AUTO_REACTION === undefined ? false : process.env.AUTO_REACTION,
  antibadword: process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline: process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake: process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage: process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS: process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount: process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm: process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage: process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink: process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio: process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku: process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU || false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
  },
  VERSION: process.env.VERSION === undefined ? 'v.2.0.0' : process.env.VERSION,
  LANG: process.env.THEME || 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
