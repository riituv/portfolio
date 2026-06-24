import type { Metadata } from "next";
import { Playfair_Display, Geist } from 'next/font/google'
import '../styles/globals.css'
import { cn } from '@/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ritu Vyas',
  description: 'Full Stack Software Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn('h-full', 'antialiased', playfair.variable, 'font-sans', geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="flex-grow flex flex-col">{children}</div>
        {/* Modern Footer */}
        <footer className="w-full py-8 text-center border-t border-border/60 bg-card/20 backdrop-blur-sm relative z-10 text-muted-foreground text-xs font-medium tracking-wide mt-auto">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Ritu Vyas. All rights reserved.</p>
            <p className="flex items-center gap-1.5 justify-center">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
