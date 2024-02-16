"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import React, { ReactNode } from "react"

interface BaseLayoutProps {
    children: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BaseLayout