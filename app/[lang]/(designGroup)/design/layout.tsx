import '../../../[lang]/globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
// import Header from '../Components/header'

import { Inter } from 'next/font/google'
// import Footer from '../Components/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Locks',
  description: 'Smart Locks',
  other: {
   "google-site-verification": 'xn42v-FLIfIHEWwy5yeFzIJ0qUk9ydfwXWAhVQmZ12Y'
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        {/* <Header lang={params.lang} /> */}
        {children}
      {/* <Footer lang={params.lang} /> */}

      </body>
    </html>
  )
}