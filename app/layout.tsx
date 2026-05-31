import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keraos.cc - AI Chat',
  description: 'AI-powered chat with OpenClaw',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
