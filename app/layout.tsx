import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import Navbar from "@/components/navbar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: " OvyCreate",
  description: "Personal portfolio website showcasing my projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
