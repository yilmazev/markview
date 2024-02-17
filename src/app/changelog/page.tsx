import Changelog from "@/containers/Changelog"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Markview - Changelog",
    description: "Find all new features, improvements, and bugfixes here."
}

export default function PageChangelog() {
    return (
        <Changelog />
    )
}