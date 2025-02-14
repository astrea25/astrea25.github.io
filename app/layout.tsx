import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aster Mangabat - Portfolio",
  description: "Personal portfolio showcasing my skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}