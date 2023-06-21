// GENERAL STYLES
import './globals.css';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Genesis",
  description: "Genesis automobiles",
  openGraph: {
    title: "Genesis",
    description: "Genesis automobiles",
    url: "https://www.essamafzal.com",
    type: "website",
    images: [
      {
        url: "https://www.essamafzal.com/thumbnail.png",
        width: 1366,
        height: 768,
      }
    ],
  },
  // <meta name=”robots” content="index, follow">
  // icons: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '32x32',
  //     href: '/favicon-32x32.png',
  //   },
  // ],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
