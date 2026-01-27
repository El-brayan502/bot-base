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

  // 🔹 CANAL SIMPLE (el que ya tenías)
  global.rcanal = {
    contextInfo: {
      externalAdReply: {
        title: '🎯 Nagi Updates',
        body: 'Desarrollo & Actualizaciones',
        sourceUrl: 'https://chat.whatsapp.com/GMl9ZCZ7IAd4s0hh0oEGvYwR',
        thumbnailUrl: 'https://chat.whatsapp.com/GMl9ZCZ7IAd4s0hh0oEGvYwR',
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }

  // 🔹 CANAL COMPLETO (IDÉNTICO a sock.sendMessage)
  global.channel = (m, teks, name, version) => ({
    text: teks,
    mentions: [m.sender],
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: `xd`,
        body: `Version • ${version}`,
        thumbnailUrl: global.iconorcanal,
        renderLargerThumbnail: false,
        mediaType: 2,
        mediaUrl: 'https://chat.whatsapp.com/H9fhGRyvrwu8rv4WTTpR0U',
        previewType: 1,
        sourceUrl: ''
      }
    }
  })

  global.done = '⚽'
  global.error = '⚠️'
  global.rwait = '⏳'

  const time = moment.tz('America/Mexico_City').hour()
  global.saludo =
    time >= 5 && time < 12
      ? '☀️ Buenos días'
      : time >= 12 && time < 18
      ? '🌤️ Buenas tardes'
      : '🌙 Buenas noches'

  global.fkontak = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: 'status@broadcast' } : {})
    },
    message: {
      contactMessage: {
        displayName: m.pushName || 'Player',
        vcard: `BEGIN:VCARD
VERSION:3.0
N:;${m.pushName || 'User'};;;
FN:${m.pushName || 'User'}
item1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}
item1.X-ABLabel:Celular
END:VCARD`
      }
    }
  }
}

export default handler

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log('✨ Actualizado: _allfeke.js (Nagi Bot Edition)')
})