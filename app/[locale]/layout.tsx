import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'arab-german-consulting',
  description: 'arab-german-consulting.com description',
}

export default function RootLayout({
  children, params: {locale}
}: {
  children: React.ReactNode,
  params : any
}) {
  return (
    <html lang={locale}>
      <body className={nunito.className}>
          {children}
      </body>
    </html>
  )
}
