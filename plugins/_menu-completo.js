import axios from 'axios'
const { generateWAMessageContent, generateWAMessageFromContent, proto } =
  (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, usedPrefix }) => {

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
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/656050-1769744293719.jpg',
      title: 'MENU OWNER',
      code: 'MENU-OWNER',
      text: `
╭──〔 👑 MENU OWNER 〕
│
│ ${usedPrefix}update
│ ${usedPrefix}cleartmp
│ ${usedPrefix}detectar
│
╰──────────────
      `.trim()
    },
    {
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/143190-1769744489959.jpg',
      title: 'MENU MAKER',
      code: 'MENU-MKR',
      text: `
╭──〔 🎯 MENU MAKER 〕
│
│ ${usedPrefix}s
│ ${usedPrefix}sticker
│
╰──────────────
      `.trim()
    },
    {
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/fb46db-1769467887638.jpg',
      title: 'MENU GRUPO',
      code: 'MENU-GROUP',
      text: `
╭──〔 ☃️ MENU GRUPO 〕
│
│ ${usedPrefix}kick
│ ${usedPrefix}link
│
╰──────────────
      `.trim()
    },
    {
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/fb46db-1769467887638.jpg',
      title: 'MENU GRUPO',
      code: 'MENU-GROUP',
      text: `
╭──〔 🛎 MENU DOWNLOADER 〕
│
│ ${usedPrefix}ig
│ ${usedPrefix}instragram 
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
        text: '© Nagi Bot MD'
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [],
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: `📂 ${menu.title}`,
            url: 'https://github.com/El-brayan502',
            copy_code: menu.code,
            expiration_time: 1754613436864329
          }
        })
      })
    })
  }

  const msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: '*MENU COMPLETO ✨️*'
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

  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  })
}

handler.command = ['menu', 'allmenu', 'help']
export default handler