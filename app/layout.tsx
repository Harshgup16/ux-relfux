import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UX Club',
  description: 'Created by Tech Team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
