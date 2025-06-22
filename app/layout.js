import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Zubair - Full Stack Developer | MERN Stack Expert',
  description: 'Passionate Full Stack Developer specializing in MERN Stack development. Building scalable web applications with React, Node.js, and modern technologies. Available for freelance projects and full-time opportunities.',
  keywords: 'Muhammad Zubair, Full Stack Developer, MERN Stack, React Developer, Node.js, JavaScript, Web Development, Pakistan Developer',
  author: 'Muhammad Zubair',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Muhammad Zubair - Full Stack Developer | MERN Stack Expert',
    description: 'Passionate Full Stack Developer specializing in MERN Stack development. Building scalable web applications with React, Node.js, and modern technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Muhammad Zubair Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Zubair - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in MERN Stack development.',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main className="relative w-full">
          {children}
        </main>
      </body>
    </html>
  )
}
