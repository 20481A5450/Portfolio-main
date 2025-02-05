import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

export const runtime = "edge";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zohaib Shaik - Portfolio',
  description: 'Personal portfolio of Zohaib Shaik, showcasing projects, experience, and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

