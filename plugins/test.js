/**
 * ⚽ NAGI BOT - COMANDO DE CANAL
 * Usa el global.rcanal definido en _allfeke.js
 */

let handler = async (m, { conn }) => {

    let mensaje = `🍀 *¡Únete a nuestra comunidad!*

Sigue el canal oficial de *${global.botname}* para recibir las últimas actualizaciones, nuevas funciones y jugadas maestras.

🏟️ *Link del Canal:*
https://whatsapp.com/channel/0029VajYamSIHphMAl3ABi1o

> ⚡ _"Analizando el campo... la victoria es nuestra."_`

    // Usamos conn.sendMessage para enviar el texto y citar el rcanal
    await conn.sendMessage(m.chat, { 
        text: mensaje 
    }, { 
        quoted: global.rcanal // <--- Aquí usamos el rcanal de tu config
    })

}

handler.help = ['canal', 'channel']
handler.tags = ['main']
handler.command = ['canal', 'channel', 'comunidad']

export default handler