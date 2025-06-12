import { createContext, useMemo, useContext, useState } from 'react'
import { useLocale } from "next-intl";

const GlobalContext = createContext(null)

export const GlobalProvider = ({ initialLocales, children }) => {
  const localeValue = useLocale()
  const [locales, setLocales] = useState(initialLocales ?? [
    {"name":"Français","short":"fr"},
    {"name":"English","short":"en"},
    {"name":"Español","short":"es"},
    {"name":"Deutsch","short":"de"}
  ])
  
  // Initialiser l'état locale de manière cohérente entre serveur et client
  const [locale, setLocale] = useState(() => {
    if (!initialLocales || initialLocales.length === 0) {
      return {"name":"Français","short":"fr"}
    }
    const currentLangValue = initialLocales.find((el) => el.short === localeValue)
    return currentLangValue || {"name":"Français","short":"fr"}
  })

  const value = useMemo(() => {
    return {
      locales,
      locale,
      setLocales,
      setLocale
    }
  }, [locales, locale])

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return {
    ...context
  }
}