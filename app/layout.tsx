import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header, Footer } from '@/components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ronald Paek | Software Engineer',
  description: 'Ronald Paek | Software Engineer',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components'],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
