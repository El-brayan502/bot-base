import { watchFile, unwatchFile } from 'fs'
import moment from 'moment-timezone'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m, { conn }) {

    global.botname = '🍀 Ｎａｇｉ - Ｂｏｔ 🍀'
    global.wm = '⚡ Nagi · Seiishiro ⚡'
    global.logo = 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/e97fef-1769474597244.jpg' 
    global.iconorcanal = 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/e97fef-1769474597244.jpg'

    global.idcanal = '120363315369913363@newsletter' 
    global.nombrecanal = '🍀 NAGI SEIISHIRO UPDATES 🍀'

    global.rcanaldev = {
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: { 
            newsletterJid: global.idcanal, 
            serverMessageId: 100, 
            newsletterName: global.nombrecanal 
        },
        externalAdReply: {
          title: '🎯 Nagi Updates',
          body: 'Desarrollo & Actualizaciones',
          thumbnailUrl: 'https://chat.whatsapp.com/GMl9ZCZ7IAhhd4s00oEGvYwR?mode=ems_copy_t',
          thumbnail: await (await fetch(global.iconorcanal)).buffer(),
          sourceUrl: 'https://chat.whatsapp.com/GMl9ZCZ7IAd4s0hh0oEGvYwR?mode=ems_copy_t',
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }

    global.done = '⚽'
    global.error = '⚠️'
    global.rwait = '⏳'

    const time = moment.tz('America/Mexico_City').hour()
    global.saludo = time >= 5 && time < 12 ? '☀️ Buenos días' : time >= 12 && time < 18 ? '🌤️ Buenas tardes' : '🌙 Buenas noches'

export default handler

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log('✨ Actualizado: _allfeke.js (Nagi Bot Edition)')
})