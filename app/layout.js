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
    url: 'https://zverse.vercel.app',
    images: [
      {
        url: '/profile-image.jpg', // Add your image here
        width: 1200,
        height: 630,
        alt: 'Muhammad Zubair - Full Stack Developer',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Zubair - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in MERN Stack development.',
    images: ['/profile-image.jpg'], // Add your image here
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for Google Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Zubair",
              "jobTitle": "Full Stack Developer",
              "description": "Passionate Full Stack Developer specializing in MERN Stack development. Building scalable web applications with React, Node.js, and modern technologies.",
              "image": "https://zverse.vercel.app/8.png",
              "url": "https://zverse.vercel.app",
              "email": "mailto:your-email@example.com",
              "telephone": "+92-xxx-xxxxxxx",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Punjab",
                "addressCountry": "Pakistan"
              },
              "sameAs": [
                "https://github.com/your-github-username",
                "https://linkedin.com/in/your-linkedin-profile",
                "https://twitter.com/your-twitter"
              ],
              "knowsAbout": [
                "React",
                "Node.js", 
                "MERN Stack",
                "JavaScript",
                "MongoDB",
                "Express.js",
                "Next.js",
                "Web Development",
                "Full Stack Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Pakistan"
                },
                "skills": "MERN Stack, React, Node.js, JavaScript, MongoDB, Express.js"
              }
            })
          }}
        />
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