import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Percy French Troubadours',
  description:
    'A two-hour show on the life and music of Percy French — raising funds for charity across Ireland.',
  keywords: ['Percy French', 'Troubadours', 'Percy French Troubadours', 'Irish charity choir'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZP50MN5JJ8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZP50MN5JJ8');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
