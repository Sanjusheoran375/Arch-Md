// Created by Ednut
// Thanks bro for using Arch-Md

require("./all/module.js")

global.owner = "919728714060" //change
global.botname = "𒈞Ᏼʀᴏᴋᴇɴ Ꮋᴇᴀʀᴛ𒈞"  //change
global.ownername = "𒈞Ᏼʀᴏᴋᴇɴ Ꮋᴇᴀʀᴛ𒈞" //change
global.simbol = "♘"
global.footer = "`𝑮𝒉𝒂𝒔𝒕 𝑪𝒍𝒂𝒏 𝑮𝒓𝒆𝒚`" //Don't touch

global.ytchannel = "youtube.com/@Ednuthimself"

global.idchannel = "120363297279563825@newsletter"
global.linkgc = 'https://chat.whatsapp.com/HO2JGN8YHr9IOf4XOSRhGe'

global.packname = "𒈞 Ᏼʀᴏᴋᴇɴ Ꮋᴇᴀʀᴛ𒈞 𝑴𝑫"
global.author = "WhatsApp Bot"

global.anticall = false
global.welcome = false // check config.json

// if you have a image url input//

global.image = "https://tinyurl.com/5f7ajm2e"
global.image2 = 'https://tinyurl.com/5f7ajm2e'

// message settings don't edit might cause malfunction ‼️//

global.msg = {
"arch": "𝑾𝒉𝒂𝒕 𝒈𝒐𝒐𝒅 ?️",
"error": "Error !!",
"done": "Success Getting Data ✅", 
"wait": "🕧 Proccess, Please Wait", 
"group": "Group only❗", 
"private": "Feature can only be used in Private Chat❗", 
"admin": "what ? are you an administrator !!", 
"adminbot": "Bot must be admin first❗", 
"owner": "this a owner cmd only❗", 
"developer": "command for developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
