"use client"

import Button from "@/components/Button"
import { Heart } from "@/components/Icons"
import "@/styles/github.min.css"
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
            <div className="container">
                <div className="my-24 flex flex-col items-center justify-center">
                    <div className="mb-32 flex flex-col items-center">
                        <h1 className="mb-6 text-center text-6xl font-semibold">
                            Quickly create <span className="!bg-clip-text [-webkit-text-fill-color:#0000] [background:linear-gradient(0deg,#b1a5eb,#a594fd_90%)] [text-fill-color:#0000]">README.md</span>
                        </h1>
                        <p className="mb-8 max-w-3xl text-center text-lg font-light text-white/75">
                            Markview offers the ability to quickly and effectively create stylish Markdown files, instantly enhancing your content. Add styles effortlessly and check the visual appeal of your content right away!
                        </p>
                        <div className="flex items-center gap-4">
                            <Button>
                                Get started
                            </Button>
                            <Button variant="secondary">
                                <Heart className="size-5 fill-white/0 stroke-stone-400 stroke-[1.5px]" />
                                Donate
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <div className="markdown-preview size-96 overflow-hidden rounded-xl bg-stone-800 p-4">
                            <ReactMarkdown className="size-full overflow-auto" remarkPlugins={[ remarkGfm, remarkHtml ]}>
                                {markdown}
                            </ReactMarkdown>
                        </div>
                        <div className="markdown-code overflow-hidden rounded-xl border border-stone-700 bg-stone-900">
                            <div className="flex w-full gap-1.5 border-b border-stone-700 px-3 py-2">
                                <span className="size-3 rounded-full bg-stone-400/25" />
                                <span className="size-3 rounded-full bg-stone-400/25" />
                                <span className="size-3 rounded-full bg-stone-400/25" />
                            </div>
                            <div className="relative h-full max-h-[570px] min-h-[570px] w-[580px] overflow-auto">
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
        </div>
    )
}

export default Hero