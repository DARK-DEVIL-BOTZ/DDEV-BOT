const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "misc",
            react: "⚙️",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                  let buttonMessaged = {
                    text: update,
                    footer: 'UPDATER',
                    headerType: 4
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }

        }
    )
  //---------------------------------------------------------------------------
cmd({
                 pattern: "updatenow",
                 desc: "Shows repo\'s refreshed commits.",
                 category: "tools",
                 react: "⚙️",
                 filename: __filename
             },
        async(Void, citel, text,{ isCreator }) => {
                if(!isCreator) return await citel.reply("Only Owner Can Use This Command")
                let commits = await DB.syncgit()
                if (commits.total === 0) return citel.reply(`*YOU HAVE LATEST VERSION INSTALLED!*`)
                let update = await DB.sync()
                await msg.send(" *𝙳𝙳𝙴𝚅 𝚄𝙿𝙳𝙰𝚃𝙴𝚁 𝚂𝚃𝙰𝚁𝚃𝙴𝙳...!*\n\n*Please wait you have new updates*\n *───────────────────────────*\n"+update +"\n\n\n"+Config.caption);
                await sleep(3000);
          try{
               let res = await updateHerokuApp('no');
          }catch(e){return await citel.error(e)}
          await citel.reply(`*Successfully updated. Now You Have Latest Version Installed!*`);
                process.exit(0);
       })
