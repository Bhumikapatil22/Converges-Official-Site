import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import { Navigation } from '../components/navigation'
import { Toaster } from '../components/ui/toaster'
import { ZoomProvider } from '../contexts/ZoomContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Converges - Annual Tech Fest',
  description: 'Experience the future of technology at Converges',
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ZoomProvider>
            <Navigation />
            {children}
            <Toaster />
          </ZoomProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

