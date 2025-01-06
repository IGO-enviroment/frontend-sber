import { ReactNode, useMemo, useState } from "react"
import { LS_THEME_KEY, Theme, ThemeContext } from "../lib/context"

const defaultTheme =
  (localStorage.getItem(LS_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={defaultProps} children={children} />
}
