import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next-Todo',
  description: 'simple todo app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
