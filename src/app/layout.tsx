import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Bebas_Neue } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'Coca-Cola Store | Sabor Original',
  description: 'Loja oficial Coca-Cola. Refrigerantes premium entregues na sua casa. Aproveite ofertas exclusivas!',
  keywords: ['coca-cola', 'refrigerante', 'bebidas', 'loja online', 'delivery'],
  authors: [{ name: 'Coca-Cola Store' }],
  openGraph: {
    title: 'Coca-Cola Store | Sabor Original',
    description: 'Refrigerantes premium entregues na sua casa',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${GeistSans.className} ${bebas.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}