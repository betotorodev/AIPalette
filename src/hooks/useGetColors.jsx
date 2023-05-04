import { useContext } from 'react'
import { PaletteContext } from '../paletteContext'
import { toast } from 'wc-toast'

// const API_KEY = process.env.PUBLIC_OPENAI_API_KEY

export function useGetColors() {
  const { palette, setPalette, error, setError, word, setWord } = useContext(PaletteContext)
  // const [error, setError] = useState()

  const prompt = `Complete the following json object with a palette of 5 colors with this keyword reference ${word}. The response must be a valid JSON object. Each color is an object containing the hexadecimals of each color with "hex" as its key name, the names, the pantone names and the rgb: {palette: []}`

  async function getColors() {
    await toast.promise(
      fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${API_KEY}`
          Authorization: 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: `${prompt}`,
          temperature: 0.7,
          max_tokens: 400,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      })
        .then((response) => response.json())
        .then((info) => {
          const data = JSON.parse(info.choices[0].text)
          setPalette(data)
        })
        // eslint-disable-next-line n/handle-callback-err
        .catch((err) => setError('something went wrong with the search')),
      {
        loading: 'Creating colors...',
        success: 'Creations complete!',
        error: 'Creation failed!'
      }
    )
  }

  function handleWord(e) {
    const { value } = e.target
    setWord(value)
  }

  return { palette, getColors, error, word, handleWord }
}
