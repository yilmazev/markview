"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import React, { ReactNode } from "react"

interface BaseLayoutProps {
    children: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="container px-6">
                <Navbar />
                {children}
                <Footer />
            </div>
        </main>
    )
}

export default BaseLayout