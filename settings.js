require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6283155619441"
global.namaowner = "Fandire•BOTZ"

//======== Setting Bot & Link ========//
global.namabot = "FANDIRR" 
global.namabot2 = "FANDIRR"
global.foother = "© Copyright Fandirr - 2024"
global.idsaluran = "-"
global.linkgc = 'https://rainxzet.com/pb1'
global.linksaluran = "https://rainxzet.com/s1"
global.linkyt = '-'
global.linktele = "https://t.me/RainStoreID"
global.packname = "Created By Fandirr"
global.author = "Fandirr"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://-"
global.apikey = "-"
global.capikey = "-"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "false"
global.gopay = "false"
global.ovo = "false"
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "-"
global.apitoken1 = "---"
global.tld1 = "-"

//========== Api Domain 2 ==========//
global.zone2 = "-";
global.apitoken2 = "-";
global.tld2 = "-";
//========== Api Domain 3 ==========//
global.zone3 = "-";
global.apitoken3 = "-";
global.tld3 = "-";
//========== Api Domain 4 ==========//
global.zone4 = "-";
global.apitoken4 = "-";
global.tld4 = "-";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})