import locale from '../locales/global';
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
  console.log(locale);
  return (
    <html lang="en" className="base">
      <body>
        {children}
      </body>
    </html>
  );
}
