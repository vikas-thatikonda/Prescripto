import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

router.post('/chat', async (req, res) => {
  console.log('Gemini chat request received:', req.body)
  const { message } = req.body
  const apiKey = process.env.GEMINI_API_KEY

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
          systemInstruction: {
            parts: [{ text: "You are a helpful, friendly, and reassuring medical assistant chatbot. Keep your responses brief and concise—ideally under 4 sentences or bullet points. Avoid long, overwhelming walls of text. Always include a brief disclaimer if providing medical advice." }]
          }
        })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('Gemini API returned an error status:', response.status, data)
    }

    // 🔍 Extract reply text
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response'

    console.log('Gemini says:', reply)

    // 🔁 Return only clean reply
    res.json({ reply })
  } catch (err) {
    console.error('Error occurred in Gemini route:', err)
    res.status(500).json({ error: 'Gemini API error', details: err.message })
  }
})

export default router
