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
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/8e38a6-1769264516221.jpg',
      text: `
╭──〔 👑 MENU OWNER 〕
│
│ #update
│ #restart
│ #cleartmp
│
╰──────────────
      `.trim()
    },
    {
      image: 'https://raw.githubusercontent.com/El-brayan502/img/upload/uploads/d97cf5-1769264470064.jpg',
      text: `
╭──〔 ⬇️ MENU DOWNLOADER 〕
│
│ #tiktok
│ #play
│ #ytmp3
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
      }),
      // 🔑 ESTO ES OBLIGATORIO AUNQUE NO USES BOTONES
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: []
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

  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  })
}

handler.command = ['menu']
export default handler