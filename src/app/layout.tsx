import { useEffect } from 'react';
import { useDarkMode, useTheme } from '@/utilities';
import './theme.css'

export const metadata = {
  title: 'SocUp',
  description: 'Society has entered the chat.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const faviconUrl = useDarkMode({ dark: '/icons/favicon-light.ico', light: '/icons/favicon.ico' });

  // set the theme initially
  const [theme, setTheme] = useTheme();
  const initialTheme = useDarkMode({ dark: 'dark', light: 'base' });
  useEffect(() => { setTheme(initialTheme); }, [initialTheme]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
