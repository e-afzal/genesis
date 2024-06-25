// GENERAL STYLES
import "./globals.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Genesis Motor",
  description: "Genesis Motor Concept based project",
  openGraph: {
    title: "Genesis Motor",
    description: "Genesis Motor Concept based project",
    url: "https://genesis-ead.vercel.app",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddeima5fc/image/upload/v1719324267/genesis_thumbnail_i1mgaq.jpg",
        width: 1920,
        height: 780,
        // width: 1200,
        // height: 627,
      },
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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
