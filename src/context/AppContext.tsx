import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'en' | 'vi'
export type Theme = 'light' | 'dark'

type AppContextValue = {
  lang: Lang
  theme: Theme
  setLang: (lang: Lang) => void
  toggleLang: () => void
  toggleTheme: () => void
  caseId: string | null
  openCase: (id: string) => void
  closeCase: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

function readHashCase(): string | null {
  const hash = window.location.hash.replace(/^#/, '')
  const match = hash.match(/^case\/([a-z0-9-]+)$/i)
  return match?.[1] ?? null
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio-lang-v2')
    return saved === 'vi' || saved === 'en' ? saved : 'en'
  })

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme-v2')
    if (saved === 'light' || saved === 'dark') return saved
    return 'dark'
  })

  const [caseId, setCaseId] = useState<string | null>(() =>
    typeof window !== 'undefined' ? readHashCase() : null,
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme-v2', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('portfolio-lang-v2', lang)
  }, [lang])

  useEffect(() => {
    const onHash = () => setCaseId(readHashCase())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'en' ? 'vi' : 'en')),
    [],
  )
  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    [],
  )

  const openCase = useCallback((id: string) => {
    window.location.hash = `case/${id}`
  }, [])

  const closeCase = useCallback(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (hash.startsWith('case/')) {
      history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}#work`,
      )
      setCaseId(null)
    }
  }, [])

  const value = useMemo(
    () => ({
      lang,
      theme,
      setLang,
      toggleLang,
      toggleTheme,
      caseId,
      openCase,
      closeCase,
    }),
    [lang, theme, setLang, toggleLang, toggleTheme, caseId, openCase, closeCase],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
