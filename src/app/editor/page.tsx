import Editor from "@/containers/Editor"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Markview - Editor",
    description: "Markview offers the ability to quickly and effectively create stylish Markdown files, instantly enhancing your content. Add styles effortlessly and check the visual appeal of your content right away!"
}

export default function PageEditor() {
    return (
        <Editor />
    )
}