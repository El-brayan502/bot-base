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

// 🔹 CONFIGURACIÓN ESTILO "VYNAA" (CATÁLOGO + BOTÓN DE GRUPO)
      contextInfo: {
        externalAdReply: {
          title: `🍀 NAGI UPDATES 🍀`,
          body: `© Vynaa Valerie`,
          thumbnailUrl: global.iconorcanal,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: "https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79"
        }
      }
    }
  }

  // --- Otros globales ---
  global.done = '⚽'; global.error = '⚠️'; global.rwait = '⏳'
}

export default handler
// ... resto del código del watchFile