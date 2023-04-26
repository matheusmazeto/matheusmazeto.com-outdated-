import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: "Matheus Mazeto's website",
  description:
    'This blog talks about computer science fundamentals and software engineering related topics.',
}

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  )
}
