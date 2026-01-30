import { watchFile, unwatchFile } from 'fs'
import moment from 'moment-timezone'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m, { conn }) {

    // --- 💠 IDENTIDAD DE NAGI ---
    global.botname = '🍀 Ｎａｇｉ - Ｂｏｔ 🍀'
    global.wm = '⚡ Nagi · Seiishiro ⚡'
    global.logo = 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/e97fef-1769474597244.jpg' 
    global.iconorcanal = 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/e97fef-1769474597244.jpg'

    global.idcanal = '120363315369913363@newsletter' 
    global.nombrecanal = '☘️ Nagi Seiishiro'

    // --- 🎯 CONFIGURACIÓN DE CANAL (ADAPTADO) ---
    global.rcanal = {
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: { newsletterJid: idcanal, serverMessageId: 100, newsletterName: nombrecanal },
        externalAdReply: {
          title: '🎯 Nagi Updates',
          thumbnailUrl: 'https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79',
          thumbnail: await (await fetch(global.iconorcanal)).buffer(),
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }

    // --- 💎 EMOJIS & ESTADOS ---
    global.done = '⚽'
    global.error = '⚠️'
    global.rwait = '⏳'

    const time = moment.tz('America/Mexico_City').hour()
    global.saludo = time >= 5 && time < 12 ? '☀️ Buenos días' : time >= 12 && time < 18 ? '🌤️ Buenas tardes' : '🌙 Buenas noches'

    // --- 🎭 FAKE CONTACT ---
    global.fkontak = {
        key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },
        message: { contactMessage: { displayName: m.pushName || 'Player', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${m.pushName || 'User'};;;\nFN:${m.pushName || 'User'}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Celular\nEND:VCARD` } }
    }
}

export default handler

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log('✨ Actualizado: _allfeke.js (Nagi Bot Edition)')
})