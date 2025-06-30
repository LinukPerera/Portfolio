import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linuk Perera Portfolio',
  description: 'Linuk Perera Portfolio 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className} style={{ height: '100%' }}>
        <Header />
        {children}
      </body>
    </html>
  )
}
