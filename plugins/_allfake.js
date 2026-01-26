import { watchFile, unwatchFile } from 'fs'
import moment from 'moment-timezone'
import { fileURLToPath } from 'url'

let handler = m => m
handler.all = async function (m, { conn }) {

    global.botname = '🍀 Ｎａｇｉ - Ｂｏｔ 🍀'
    global.wm = '⚡ Nagi · Seiishiro ⚡'
    global.logo = 'https://i.pinimg.com/736x/88/22/02/8822026362529806e22c954e7d17462c.jpg' 
    global.iconorcanal = 'https://i.pinimg.com/736x/95/8e/4a/958e4a938c538a08d98d2543e26f53f6.jpg'
    global.metanombre = 'NAGI-COMMUNITY'
    
    global.idcanal = '120363315369913363@newsletter' 
    global.nombrecanal = '🍀 NAGI SEIISHIRO UPDATES 🍀'

    global.done = '⚽'
    global.error = '⚠️'
    global.msm = '✉️'
    global.rwait = '⏳'
    
    global.emoji = '🍀'
    global.emoji2 = '⚽'
    global.emoji3 = '⚡'

    const time = moment.tz('America/Mexico_City').hour()
    global.saludo = time >= 5 && time < 12 ? '☀️ Buenos días' : time >= 12 && time < 18 ? '🌤️ Buenas tardes' : '🌙 Buenas noches'

    global.espera = '⏳ *Analizando jugada...* ⚽'
    global.esperat = '🏟️ *Nagi está entrando al campo...* ✨'
    global.esperatt = '⚙️ *Cargando genio táctico...* ⚡'

    global.fkontak = {
        key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },
        message: { contactMessage: { displayName: m.pushName || 'Player', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${m.pushName || 'User'};;;\nFN:${m.pushName || 'User'}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Celular\nEND:VCARD` } }
    }

export default handler

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log('✨ Actualizado: _allfeke.js (Nagi Bot Edition)')
})