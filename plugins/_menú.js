import axios from 'axios'
const { generateWAMessageContent, generateWAMessageFromContent, proto } =
  (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn }) => {
  await conn.sendMessage(
    m.chat,
    { text: '*`CARGANDO MENÚ POR CATEGORÍAS...`*' },
    { quoted: m }
  )

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent(
      { image: { url } },
      { upload: conn.waUploadToServer }
    )
    return imageMessage
  }

  const menus = [
    {
      title: 'MENU OWNER',
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/8e38a6-1769264516221.jpg',
      text: `
╭──〔 👑 MENU OWNER 〕
│
│ #update
│ #restart
│ #cleartmp
│ #bc
│
╰──────────────
      `.trim()
    },
    {
      title: 'MENU DOWNLOADER',
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/d97cf5-1769264470064.jpg',
      text: `
╭──〔 ⬇️ MENU DOWNLOADER 〕
│
│ #tiktok
│ #play
│ #ytmp3
│ #ytmp4
│
╰──────────────
      `.trim()
    },
    {
      title: 'MENU INFO',
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/f0ce07-1768894711861.jpg',
      text: `
╭──〔 ℹ️ MENU INFO 〕
│
│ #infobot
│ #ping
│ #status
│
╰──────────────
      `.trim()
    }
  ]

  let cards = []

  for (let menu of menus) {
    const imageMsg = await createImage(menu.image)

    cards.push({
      header: proto.Message.InteractiveMessage.Header.fromObject({
        hasMediaAttachment: true,
        imageMessage: imageMsg
      }),
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: menu.text
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: '© Yae Miku Bot'
      })
      // ❌ NO botones
      // ❌ NO nativeFlowMessage
    })
  }

  const carouselMessage = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: '📂 *MENÚ PRINCIPAL*'
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards
            })
          })
        }
      }
    },
    { quoted: m }
  )

  await conn.relayMessage(
    m.chat,
    carouselMessage.message,
    { messageId: carouselMessage.key.id }
  )
}

handler.command = ['menu', 'menucarrusel']
handler.tags = ['main']
handler.help = ['menu']

export default handler