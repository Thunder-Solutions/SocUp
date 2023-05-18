import { useEffect, useState } from 'react';

type DarkModePref<T> = {
  dark: T,
  light: T,
};

/**
 * Returns a value based on whether the system preference is set to dark or light mode.
 */
export const useDarkMode = <T>({ dark, light }: DarkModePref<T>): T => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, [darkMode]);
  return darkMode ? dark : light;
};

/**
 * Encapsulated useState which updates the theme as a class name on the document element.
 */
export const useTheme = (): [string, (theme: string) => void]  => {
  const [theme, setTheme] = useState('base');

  // get the initial theme value and watch it for changes
  useEffect(() => {
    const html = document.documentElement;
    setTimeout(() => { setTheme(html.className); });
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          setTheme(html.className);
        }
      }
    });
    observer.observe(html, { attributes: true });
  }, []);

  // custom setter for external use, because the mutation observer
  // takes care of the React state
  const _setTheme = (newTheme: string) => { document.documentElement.className = newTheme; };

  return [theme, _setTheme];
};
