import { watchFile, unwatchFile } from 'fs'
import moment from 'moment-timezone'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m, { conn }) {

  global.logo = 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/e97fef-1769474597244.jpg'
  global.iconorcanal = 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/e97fef-1769474597244.jpg'
  global.idcanal = '120363315369913363@newsletter'
  global.nombrecanal = '🍀 NAGI SEIISHIRO UPDATES 🍀'

  // 🔹 CONFIGURACIÓN ESTILO VYNAA VALERIE
  global.rcanaldev = {
    contextInfo: {
      externalAdReply: {
        title: `Nagi - Seiishiro`,
        body: `Version • 1.0.2`,
        thumbnail: await (await fetch(global.iconorcanal)).buffer(),
        renderLargerThumbnail: true, // <--- Esto hace que se vea grande como en tu foto
        mediaType: 2, // <--- Esto habilita el botón "Unirme al grupo"
        mediaUrl: "https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79",
        previewType: 'PHOTO',
        sourceUrl: "https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79"
      }
    }
  }

  // --- Otros globales ---
  global.done = '⚽'; global.error = '⚠️'; global.rwait = '⏳'
}

export default handler
// ... resto del código del watchFile