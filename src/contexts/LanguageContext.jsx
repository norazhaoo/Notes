
import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // 从localStorage读取保存的语言设置，默认为英文
    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    // 保存语言设置到localStorage
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

