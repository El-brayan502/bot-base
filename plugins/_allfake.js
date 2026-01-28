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
  global.rcanaldev = {
    productMessage: {
      product: {
        productImage: { url: global.iconorcanal }, // Imagen del producto
        productId: "69474597244",
        title: "Nagi - Seiishiro",
        description: "Version • 1.0.2",
        currencyCode: "USD",
        priceAmount1000: "99990", // Esto pone el $99.99 que viste
        retailerId: "NagiBot",
        url: "https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79" 
      },
      businessOwnerJid: "0@s.whatsapp.net",
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: { 
            newsletterJid: global.idcanal, 
            serverMessageId: 100, 
            newsletterName: global.nombrecanal 
        },
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