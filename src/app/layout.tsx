import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md Sohel | Software Engineer',
  description: 'Passionate Full Stack Developer currently working at Sardar IT. I have completed my Bachelor’s degree in Computer Science and Engineering from Green University of Bangladesh.',
  keywords: 'software engineer, full-stack developer, React, Next.js, competitive programming',
  authors: [{ name: 'Md Sohel' }],
  openGraph: {
    title: 'Md Sohel | Software Engineer Portfolio',
    description: 'Building innovative, scalable, and user-focused solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="bg-background">
        <ThemeProvider attribute="class" defaultTheme="light" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}