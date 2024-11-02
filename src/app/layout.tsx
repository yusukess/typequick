import type { Metadata, Viewport } from 'next';
import 'the-new-css-reset/css/reset.css';
import '@styles/global.scss';

import Footer from '@layouts/footer/footer';

export const metadata: Metadata = {
  title: 'TypeQuick',
  description: '',
};

export const viewport: Viewport = {
  themeColor: '#004b9e',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
