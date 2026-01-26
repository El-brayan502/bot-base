import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
  try {
    if (!args[0]) {
      return m.reply(
        '❌ *Falta el enlace de Instagram*\n\n' +
        '📌 Ejemplo:\n' +
        '.ig https://www.instagram.com/reel/xxxx/'
      )
    }

    const igUrl = encodeURIComponent(args[0])
    const apiUrl = `https://neji-api.vercel.app/api/downloader/instagram?url=${igUrl}`

    m.reply('⏳ Descargando video de Instagram...')

    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status || !json.results || !json.results.length) {
      return m.reply('❌ No se pudo descargar el contenido.')
    }

    const result = json.results[0]

    if (result.type === 'video') {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: result.url },
          caption: '✅ *Video descargado con éxito*\n\nPowered by Neji API'
        },
        { quoted: m }
      )
    } else {
      m.reply('⚠️ El contenido no es un video.')
    }
  } catch (e) {
    console.error(e)
    m.reply('❌ Error al descargar el video.')
  }
}

handler.help = ['ig <url>']
handler.tags = ['downloader']
handler.command = ['ig', 'instagram', 'igdl']

export default handler