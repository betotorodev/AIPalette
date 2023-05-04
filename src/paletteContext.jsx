import { useState, createContext } from 'react'

export const PaletteContext = createContext()

// eslint-disable-next-line react/prop-types
export function PaletteProvider({ children }) {
  const [palette, setPalette] = useState()
  const [error, setError] = useState()

  return (
    <PaletteContext.Provider
      value={{
        palette,
        setPalette,
        error,
        setError
      }}
    >
      {children}
    </PaletteContext.Provider>
  )
}
