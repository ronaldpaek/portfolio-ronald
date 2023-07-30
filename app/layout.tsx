import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header, Footer } from '@/components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ronald's Portfolio",
  description: 'Welcome to my portfolio!',
  icons: {
    icon: '/favicon/favicon.svg',
  },
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
