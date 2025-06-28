import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Zubair - Full Stack Developer | React.js, Node.js & MERN Stack Expert',
  description: 'Experienced Full Stack Developer from Pakistan specializing in MERN Stack, React.js, Next.js, Node.js, and modern web development. 2+ years building scalable applications. Available for freelance projects and remote opportunities.',
  keywords: [
    'Muhammad Zubair',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer', 
    'Next.js Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer Pakistan',
    'Freelance Developer',
    'Remote Developer',
    'MongoDB Expert',
    'Express.js',
    'TypeScript',
    'REST API',
    'Web3 Developer',
    'Portfolio Website',
    'Bahria University',
    'CodeCrafters',
    'QuantaByte'
  ].join(', '),
  authors: [{ name: 'Muhammad Zubair', url: 'https://zverse.vercel.app' }],
  creator: 'Muhammad Zubair',
  publisher: 'Muhammad Zubair',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zverse.vercel.app'),
  alternates: {
    canonical: 'https://zverse.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zverse.vercel.app',
    siteName: 'Muhammad Zubair - Full Stack Developer Portfolio',
    title: 'Muhammad Zubair - Full Stack Developer | React.js, Node.js & MERN Stack Expert',
    description: 'Experienced Full Stack Developer from Pakistan specializing in MERN Stack, React.js, Next.js, Node.js. 2+ years building scalable applications. View my portfolio and get in touch for your next project.',
    images: [
      {
        url: '/8.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Zubair - Full Stack Developer Portfolio',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thisiszubi',
    creator: '@thisiszubi',
    title: 'Muhammad Zubair - Full Stack Developer | MERN Stack Expert',
    description: 'Experienced Full Stack Developer specializing in React.js, Node.js, and MERN Stack development. Building scalable web applications.',
    images: ['/8.png'],
  },
  verification: {
    google: '2609c734c8ad85dd', // Your Google verification code from the HTML file
  },
  category: 'Technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Enhanced Structured Data for Google Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "WebSite"],
              "name": "Muhammad Zubair",
              "alternateName": "Zubair Ahmed",
              "jobTitle": "Full Stack Developer",
              "description": "Experienced Full Stack Developer specializing in MERN Stack development. Building scalable web applications with React, Node.js, and modern technologies.",
              "image": "https://zverse.vercel.app/8.png",
              "url": "https://zverse.vercel.app",
              "mainEntityOfPage": "https://zverse.vercel.app",
              "email": "mailto:zzubairahmed402@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Islamabad",
                "addressRegion": "Punjab", 
                "addressCountry": "Pakistan"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Bahria University Islamabad",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Islamabad",
                  "addressCountry": "Pakistan"
                }
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "CodeCrafters",
                  "jobTitle": "Node.js Team Lead",
                  "startDate": "2024-08",
                  "endDate": "2024-12"
                },
                {
                  "@type": "Organization", 
                  "name": "QuantaByte",
                  "jobTitle": "Full Stack Developer",
                  "startDate": "2024-03",
                  "endDate": "2024-08"
                }
              ],
              "sameAs": [
                "https://github.com/LunarLogician",
                "https://www.linkedin.com/in/muhammad-zubair-2130b2244/",
                "https://x.com/thisiszubi",
                "https://www.upwork.com/freelancers/zubairm35",
                "https://www.fiverr.com/s/GzrYaEa"
              ],
              "knowsAbout": [
                "React.js",
                "Node.js",
                "Next.js", 
                "MERN Stack",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Express.js",
                "PostgreSQL",
                "Web Development",
                "Full Stack Development",
                "RESTful APIs",
                "Web3",
                "Docker",
                "Git",
                "Tailwind CSS"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Pakistan"
                },
                "skills": "React.js, Node.js, Next.js, MERN Stack, JavaScript, TypeScript, MongoDB, Express.js, PostgreSQL",
                "experienceRequirements": "2+ years",
                "responsibilities": "Building scalable web applications, RESTful API development, Frontend and Backend development"
              },
              "owns": {
                "@type": "WebSite",
                "name": "Muhammad Zubair Portfolio",
                "url": "https://zverse.vercel.app",
                "description": "Portfolio website showcasing full stack development projects and expertise",
                "author": {
                  "@type": "Person",
                  "name": "Muhammad Zubair"
                }
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