export const metadata = {
  title: 'Hire Muhammad Zubair - Freelance Full Stack Developer | Upwork & Fiverr',
  description: 'Looking to hire a skilled Full Stack Developer? Muhammad Zubair offers professional web development services on Upwork and Fiverr. Specializing in React.js, Node.js, MERN Stack development with 2+ years experience.',
  keywords: 'hire full stack developer, freelance web developer, upwork developer, fiverr developer, react developer for hire, node.js freelancer, MERN stack freelancer, web development services',
  openGraph: {
    title: 'Hire Muhammad Zubair - Freelance Full Stack Developer',
    description: 'Professional web development services on Upwork and Fiverr. Expert in React.js, Node.js, and MERN Stack development.',
    url: 'https://zverse.vercel.app/freelance',
    type: 'website',
    images: [
      {
        url: '/8.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Zubair - Freelance Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Muhammad Zubair - Freelance Full Stack Developer',
    description: 'Professional web development services on Upwork and Fiverr.',
    images: ['/8.png'],
  },
  alternates: {
    canonical: 'https://zverse.vercel.app/freelance',
  },
}

export default function FreelanceLayout({ children }) {
  return children;
}
