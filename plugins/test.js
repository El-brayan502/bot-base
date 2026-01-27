/**
 * ⚽ NAGI BOT - COMANDO DE PRUEBA RCANAL
 * Este comando usa el global.rcanal configurado en _allfeke.js
 */

let handler = async (m, { conn, usedPrefix, command }) => {

    let mensaje = `⚽ *¡PRUEBA DE JUGADA!* ⚽\n\nEste mensaje está siendo enviado utilizando el estilo de *Order Message* que configuramos para el canal oficial.`

    // Enviamos el mensaje y le pasamos el rcanal en la propiedad 'quoted'
    await conn.sendMessage(m.chat, { 
        text: mensaje 
    }, { 
        quoted: global.rcanal 
    })

}

handler.help = ['testrcanal']
handler.tags = ['main']
handler.command = ['testrcanal', 'probarcanal', 'nagitest']

export default handler