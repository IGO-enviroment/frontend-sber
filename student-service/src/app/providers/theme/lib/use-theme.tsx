import { useContext, useEffect } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from '@/app/providers/theme/lib/context';

interface UseThemeResult{
    theme: Theme | undefined,
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme) document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.PURPLE;
        break;
      case Theme.PURPLE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    localStorage.setItem(LS_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  };

  return { theme, toggleTheme };
};
