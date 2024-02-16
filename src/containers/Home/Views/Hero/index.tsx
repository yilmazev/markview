"use client"

import Button from "@/components/Button"
import { IconHeart } from "@/components/Icons"
import "@/styles/github.min.css"
import Link from "next/link"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import Editor from "react-simple-code-editor"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"

const Hero: React.FC = () => {
    const [ markdown, setMarkdown ] = useState<string>(`# Hello 👋
Markview is a tool that allows you to create stylish README.md files with ease. Start by typing in the editor on the right, and watch the live preview on the left.

## Getting Started

1. Click the "Get started" button top.
2. Edit the Markdown on the right.
3. See the live preview on the left.

Enjoy using Markview!

---

\`\`\`typescript
import Component from "markview"

const App: React.FC = () => {
    return <Component />
}

export default App
\`\`\`

|  Name  | Surname |     Email address     |
|--------|:-------:|:---------------------:|
| Yilmaz |    Ev   | yilmaz.ev@outlook.com |
`)

    return (
        <div className="flex min-h-svh w-full justify-center bg-headerGrid bg-cover bg-top bg-no-repeat">
            <div className="my-12 flex w-full flex-col items-center justify-center lg:my-24">
                <div className="mb-24 flex flex-col items-center lg:mb-32">
                    <h1 className="mb-6 text-center text-4xl font-semibold lg:text-6xl">
                        Quickly create <span className="!bg-clip-text [-webkit-text-fill-color:#0000] [background:linear-gradient(0deg,#b1a5eb,#a594fd_90%)] [text-fill-color:#0000]">README.md</span>
                    </h1>
                    <p className="mb-8 w-full text-center font-light text-white/75 lg:max-w-3xl lg:text-lg">
                        Markview offers the ability to quickly and effectively create stylish Markdown files, instantly enhancing your content. Add styles effortlessly and check the visual appeal of your content right away!
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <Link href="/editor" aria-label="Get started">
                            <Button>Get started</Button>
                        </Link>
                        <Link href="https://www.buymeacoffee.com/yilmazev" target="_blank" aria-label="Donate">
                            <Button variant="secondary">
                                <IconHeart className="size-5 fill-white/0 stroke-stone-400 stroke-[1.5px]" />
                                Donate
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-col-reverse items-center justify-center gap-6 lg:flex-row">
                    <div className="markdown-preview z-30 max-h-96 w-full max-w-96 overflow-auto rounded-xl bg-stone-800 p-4">
                        <ReactMarkdown className="size-full" remarkPlugins={[ remarkGfm, remarkHtml ]}>
                            {markdown}
                        </ReactMarkdown>
                    </div>
                    <div className="markdown-code overflow-hidden rounded-xl border border-stone-700 bg-stone-900">
                        <div className="flex w-full gap-1.5 border-b border-stone-700 px-3 py-2">
                            <span className="size-3 rounded-full bg-stone-400/25" />
                            <span className="size-3 rounded-full bg-stone-400/25" />
                            <span className="size-3 rounded-full bg-stone-400/25" />
                        </div>
                        <div className="relative size-full overflow-auto lg:max-h-[570px] lg:min-h-[570px] lg:w-[580px]">
                            <Editor
                                value={markdown}
                                onValueChange={(markdown) => setMarkdown(markdown)}
                                padding={16}
                                style={{
                                    fontFamily: "\"Fira code\", \"Fira Mono\", monospace",
                                    fontSize: 12,
                                    width: "100%"
                                }}
                                highlight={(code) => (
                                    <SyntaxHighlighter language="markdown"
                                        className={"syntax-highlighter"}
                                        useInlineStyles={false}
                                        wrapLines={false}
                                        wrapLongLines={true}
                                    >
                                        {code}
                                    </SyntaxHighlighter>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero