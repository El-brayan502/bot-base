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

 // 🔹 CONFIGURACIÓN ESTILO PROFESIONAL (MINIATURA + BOTÓN)
  global.rcanaldev = {
    contextInfo: {
      isForwarded: true, // Ayuda al renderizado interactivo
      externalAdReply: {
        title: `Nagi - Seiishiro`,
        body: `Version • 1.0.2`,
        // Es vital enviar el buffer procesado aquí
        thumbnail: await (await fetch(global.iconorcanal)).buffer(), 
        thumbnailUrl: global.iconorcanal, 
        renderLargerThumbnail: true, // Cámbialo a false si quieres la miniatura pequeña a la izquierda
        mediaType: 1, // Cambiado de 2 a 1 para mejor estabilidad de miniatura
        mediaUrl: "https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79",
        sourceUrl: "https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79"
      }
    }
  }

  // --- Otros globales ---
  global.done = '⚽'; global.error = '⚠️'; global.rwait = '⏳'
}

export default handler
// ... resto del código del watchFile