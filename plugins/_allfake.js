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

 // 🔹 CONFIGURACIÓN ESTILO PROFESIONAL (BOTÓN + MINIATURA GRANDE)
  global.rcanaldev = {
    contextInfo: {
      // Re-agregamos esto pero de forma simplificada para soporte visual
      isForwarded: true,
      externalAdReply: {
        title: `Nagi - Seiishiro`,
        body: `Version • 1.0.2`,
        // Usamos tanto 'thumbnail' como 'thumbnailUrl' para asegurar carga
        thumbnail: await (await fetch(global.iconorcanal)).buffer(),
        thumbnailUrl: global.iconorcanal, 
        renderLargerThumbnail: true, // Crucial para el tamaño grande
        mediaType: 2, 
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