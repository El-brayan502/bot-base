
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
    global.nombrecanal = '🍀 NAGI SEIISHIRO UPDATES 🍀'
    global.linkGP = 'https://chat.whatsapp.com/GMl9ZCZ7IAd4s0hh0oEGvYwR' // Tu link de grupo sin basura al final

    // --- 🎯 CONFIGURACIÓN CON BOTÓN "UNIRME AL GRUPO" ---
    global.rcanaldev = {
        // Al enviar esto, Baileys lo detecta como invitación y pone el botón
        groupInviteMessage: {
            groupJid: '120363160031023229@g.us', // Jid del grupo (puedes inventar uno si no lo tienes)
            inviteCode: 'GMl9ZCZ7IAd4s0hh0oEGvYwR', // El código final de tu link
            groupName: global.nombrecanal, 
            caption: null, 
            jpegThumbnail: await (await fetch(global.iconorcanal)).buffer(),
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: global.idcanal,
                    serverMessageId: 100,
                    newsletterName: global.nombrecanal 
                },
                externalAdReply: {
                    title: '🎯 Nagi Updates',
                    body: '¡Únete a nuestra comunidad!',
                    mediaType: 1,
                    previewType: 'PHOTO',
                    thumbnailUrl: global.iconorcanal,
                    thumbnail: await (await fetch(global.iconorcanal)).buffer(),
                    sourceUrl: global.linkGP,
                    renderLargerThumbnail: false
                }
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