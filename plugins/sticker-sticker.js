import { sticker } from '../lib/bibliotecas/sticker.js'
import Jimp from 'jimp'

async function makeFkontak() {
  try {
    const res = await fetch('https://i.postimg.cc/rFfVL8Ps/image.jpg')
    const thumb2 = Buffer.from(await res.arrayBuffer())
    return {
      key: { 
        participants: '0@s.whatsapp.net', 
        remoteJid: 'status@broadcast', 
        fromMe: false, 
        id: 'Halo' 
      },
      message: { 
        locationMessage: { 
          name: 'Created Sticker', 
          jpegThumbnail: thumb2 
        } 
      },
      participant: '0@s.whatsapp.net'
    }
  } catch {
    return undefined
  }
}

let handler = async (m, { conn, args }) => {
  let stiker = false
  const fkontak = await makeFkontak()

  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''

    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime) && (q.msg || q).seconds > 15)
        return m.reply('🚫 El video no puede durar más de 15 segundos.')

      let img = await q.download?.()
      if (!img) 
        return conn.reply(m.chat, '📌 Envía una imagen o video para crear un sticker.', fkontak)

      let image = await Jimp.read(img)
      const size = Math.min(image.bitmap.width, image.bitmap.height)
      const x = (image.bitmap.width - size) / 2
      const y = (image.bitmap.height - size) / 2
      image.crop(x, y, size, size)
      image.resize(512, 512)
      img = await image.getBufferAsync(Jimp.MIME_PNG)

      let userId = m.sender
      let packstickers = global.db.data.users[userId] || {}
      let texto1 = packstickers.text1 || global.packsticker
      let texto2 = packstickers.text2 || global.packsticker2

      stiker = await sticker(img, false, texto1, texto2)
    } else if (args[0]) {
      if (isUrl(args[0])) {
        stiker = await sticker(false, args[0], global.packsticker, global.packsticker2)
      } else {
        return m.reply('⚠️ La URL no es válida.', fkontak)
      }
    }
  } catch (e) {
    console.error(e)
  } finally {
    if (stiker) {
      await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { quoted: fkontak })
    } else {
      await conn.reply(m.chat, '🪴 _Envía una imagen o video (máx. 15s) para crear un sticker._', fkontak)
    }
  }
}

handler.help = ['s', 'sticker', 'stiker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker']

export default handler

const isUrl = (text) => {
  return text.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4|webm)/,
      'gi'
    )
  )
}