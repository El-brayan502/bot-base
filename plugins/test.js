import { fileURLToPath } from 'url'
import path from 'path'

let handler = async (m, { conn, usedPrefix, command }) => {

    // El mensaje que enviará el bot
    let texto = `¡Hola *${m.pushName}*! ⚽\n\nEste es un mensaje de prueba utilizando el contexto de canal de *Nagi - Bot*.\n\n¿Puedes ver la información del canal arriba del mensaje?`

    // Enviamos el mensaje usando el objeto global.rcanaldev en el contextInfo
    await conn.sendMessage(m.chat, { 
        text: texto,
        contextInfo: global.rcanaldev.contextInfo 
    }, { quoted: m })

}

// Definición del comando
handler.help = ['testcanal']
handler.tags = ['main']
handler.command = ['testcanal', 'probarcanal']

export default handler