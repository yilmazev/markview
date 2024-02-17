import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: [ "latin" ],
    weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ]
})

export const metadata: Metadata = {
    title: "Markview - Quickly create README.md",
    description: "Markview offers the ability to quickly and effectively create stylish Markdown files, instantly enhancing your content. Add styles effortlessly and check the visual appeal of your content right away!"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/assets/images/favicon/safari-pinned-tab.svg" color="#b6a8ff" />
                <meta name="apple-mobile-web-app-title" content="Markview" />
                <meta name="application-name" content="Markview" />
                <meta name="msapplication-TileColor" content="#b6a8ff" />
                <meta name="theme-color" content="#b6a8ff" />
            </head>
            <body className={`bg-stone-950 text-white antialiased ${inter.className}`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}