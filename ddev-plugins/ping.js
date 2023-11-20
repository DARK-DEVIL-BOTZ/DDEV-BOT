const Secktor = require('../lib');
Secktor.cmd({
    pattern: "ping",
    desc: "To check ping",
    category: "general",
    react: "📍",
    filename: __filename,
},
async (Void, citel) => {
    var initial = new Date().getTime();
    const { key } = await Void.sendMessage(citel.chat, { text: '```𝙿𝙸𝙽𝙶𝙸𝙽𝙶 𝙵𝚁𝙾𝙼 𝚂𝙴𝚁𝚅𝙴𝚁...```' });
    var final = new Date().getTime();

    // Calculate the ping value in milliseconds
    const pingValue = final - initial;

    // Create a loading bar
    const loadingBarLength = 20;
    const loadedBlocks = loadingBarLength;
    const loadingBar = '█'.repeat(loadedBlocks);

    // Send the loading bar first
    await Void.sendMessage(citel.chat, { text: `*𝙿𝙾𝙽𝙶*\n 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 : [${loadingBar}] 100%`, edit: key });

    // Wait for a brief moment (you can customize this delay)
    await Secktor.sleep(1000);

    // Send the final ping message
    return await Void.sendMessage(citel.chat, { text: `*🎀 𝙳𝙳𝙴𝚅'𝚂 𝙿𝙸𝙽𝙶 : ${pingValue} 𝚖𝚜*` });
});
