// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TreeLayout from '@/components/TreeLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aidan Witeck',
  description: 'Aidan Witeck\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f3eb] vsc-initialized`}>
        <TreeLayout>
          {children}
        </TreeLayout>
      </body>
    </html>
  )
}