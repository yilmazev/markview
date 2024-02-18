"use client"

import Button from "@/components/Button"
import { IconDownload, IconHeart } from "@/components/Icons"
import Modal from "@/components/Modal"
import "@/styles/github.min.css"
import { saveAs } from "file-saver"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import Editor from "react-simple-code-editor"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"

const EditorRenderer: React.FC = () => {
    const [ isShowDonateModal, setIsShowDonateModal ] = useState<boolean>(true)
    const [ isPreview, setIsPreview ] = useState<boolean>(false)
    const [ markdown, setMarkdown ] = useState<string>(`# Hello 👋
## What is Markdown?

Markdown is a lightweight and easy-to-use markup language for web writers. Markdown allows you to add formatting elements to plaintext documents and then convert them to structurally valid HTML.

Markdown syntax can be divided into two broad categories. These categories are (1) basic syntax outlined in the original design document and (2) extension of basic syntax for added capability and features.

Refer to [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) for more examples.

## Basic syntax

These elements are defined in the original Markdown design document and can be used in all Markdown applications.

Detailed information and examples can be fount at [basic syntax guide](https://www.markdownguide.org/basic-syntax/).

### Headings

\`\`\`markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
\`\`\`

### Paragraph

\`\`\`markdown
Here's a paragraph.
\`\`\`

### Line break

\`\`\`markdown
Here's another one  
with a line break.
\`\`\`

### Bold

\`\`\`markdown
**bold text**  
__bold also__
\`\`\`

### Italic

\`\`\`markdown
*italic text*  
_italic also_
\`\`\`

### Blockquote

\`\`\`markdown
> blockquote text
\`\`\`

### Ordered list

\`\`\`markdown
1. Item 1
1. Item 2
    1. Item 2a
    1. Item 2b
1. Item 3
\`\`\`

### Unordered list

\`\`\`markdown
- Item
- Item
    - Indented item
    - Indented item
- Item
\`\`\`

### Inline code

\`\`\`markdown
This is an inline \`code\`.
\`\`\`

### Horizontal rule

\`\`\`markdown
Here's some text.

---

Here's more text.
\`\`\`

### Link

\`\`\`markdown
[title](https://www.example.com)
\`\`\`

### Image

\`\`\`markdown
![alt text](image.jpg)
\`\`\`

## Extended syntax

These elements provide additional features by extending the basic syntax. Not all Markdown applications support these elements and each \`Markdown Flavor\` differs slightly.

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

\`\`\`markdown
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
\`\`\`

### Fenced code block

\`\`\`
{
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
}
\`\`\`

    \`\`\`
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 25
    }
    \`\`\`

### Syntax highlighting

\`\`\`json
{
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
}
\`\`\`

    \`\`\`json
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 25
    }
    \`\`\`

### Footnote

\`\`\`
Here's a sentence with a footnote reference. [^1]

[^1]: This is the footnote.
\`\`\`

### Abbreviation

\`\`\`markdown
*[SMTP]: Simple Mail Transfer Protocol
The SMTP is a communication protocol for email transmission.
\`\`\`

### Heading ID

\`\`\`markdown
### Awesome Heading {#custom-id}
\`\`\`

### Strikethrough

\`\`\`markdown
~~~text~~~
\`\`\`

### Task list

\`\`\`markdown
- [x] Read the Markdown guide
- [ ] Review the style guide
- [ ] Stay awesome!
\`\`\`

### Emoji characters

\`\`\`markdown
👍🤓
\`\`\`

### Automatic URL linking

\`\`\`markdown
https://www.example.com
\`\`\`

### Disabling automatic URL linking

\`\`\`markdown
\`https://www.example.com\`
\`\`\`

### HTML

\`\`\`html
<div>
    <p>HTML test paragraph.</p>
</div>
\`\`\`
    `)

    const downloadMarkdown = () => {
        const blob = new Blob([ markdown ], { type: "text/markdown" })
        saveAs(blob, "markview.md")
    }

    useEffect(() => {
        const handleBeforeUnload = (e: any) => {
            const message = "Are you sure you want to leave the page?"
            e.returnValue = message
            return message
        }
    
        window.addEventListener("beforeunload", handleBeforeUnload)
    
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
        }
    }, [])

    return (
        <div className="h-svh max-h-svh">
            {isShowDonateModal && (
                <Modal size="small" title="Ad-Free Experience" onClose={() => setIsShowDonateModal(false)}>
                    <h2 className="mb-2 text-xl font-semibold">Support Us</h2>
                    <p className="text-sm text-white/85">You can contribute to enjoying our website without ads and at a faster pace. Every donation supports our efforts to provide you with a better experience.</p>
                    <div className="mt-6 flex items-center justify-end gap-3">
                        <Button variant="secondary" size="small" onClick={() => setIsShowDonateModal(false)}>Close</Button>
                        <Link href="https://www.buymeacoffee.com/yilmazev" target="_blank" aria-label="Donate">
                            <Button size="small">
                                <IconHeart className="size-5 fill-transparent stroke-white stroke-[1.5px]" />
                                Donate
                            </Button>
                        </Link>
                    </div>
                </Modal>
            )}
            <div className="h-full">
                <div className="flex h-36 flex-col bg-stone-900 lg:h-20">
                    <div className="flex h-full items-center justify-between border-b border-stone-700 px-4 lg:px-10">
                        <Link href="/" className="relative block h-[30px] w-[150px] lg:w-[190px]" aria-label="Home">
                            <Image src="/assets/images/logo-light.svg" alt="Markview Logo" width={190} height={30} priority={true} />
                            <span className="absolute -right-12 -top-2 rounded-lg bg-primary-600 px-2 py-1 text-xs font-medium">Beta</span>
                        </Link>
                        <div className="flex items-center gap-1 sm:gap-3">
                            <Button size="small" onClick={downloadMarkdown} style={{ padding: "10px" }}>
                                <IconDownload className="size-5 fill-none stroke-white stroke-[1.5px] lg:size-6" />
                                <span className="hidden lg:block">Download</span>
                            </Button>
                            <Link href="https://www.buymeacoffee.com/yilmazev" target="_blank" aria-label="Donate">
                                <Button size="small" style={{ padding: "10px" }}>
                                    <IconHeart className="size-5 fill-transparent stroke-white stroke-[1.5px]" />
                                    <span className="hidden lg:block">Donate</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-6 px-4 pt-5 lg:hidden lg:px-10">
                        <Button
                            variant="tertiary"
                            size="small"
                            color={isPreview ? "light" : "primary"}
                            extraStyle={`!pb-3 border-b-2 ${isPreview ? "border-transparent" : "border-primary-600"}`}
                            onClick={() => setIsPreview(false)}
                        >
                            Markdown
                        </Button>
                        <Button
                            variant="tertiary"
                            size="small"
                            color={!isPreview ? "light" : "primary"}
                            extraStyle={`!pb-3 border-b-2 ${isPreview ? "border-primary-600" : "border-transparent"}`}
                            onClick={() => setIsPreview(true)}
                        >
                            Preview
                        </Button>
                    </div>
                </div>
                <div className="flex h-[calc(100%-9rem)] w-full gap-[1px] bg-stone-700 lg:h-[calc(100%-5rem)]">
                    <div className={`markdown-code w-full bg-stone-800 lg:block lg:w-1/2 ${isPreview ? "hidden" : "block"}`}>
                        <div className="relative size-full overflow-auto">
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
                    <div className={`markdown-preview relative w-full lg:block lg:w-1/2 ${isPreview ? "block" : "hidden"}`}>
                        <ReactMarkdown className="relative z-10 size-full overflow-auto px-4 pt-4 lg:px-12 lg:pt-6" remarkPlugins={[ remarkGfm, remarkHtml ]}>
                            {markdown}
                        </ReactMarkdown>
                        <div className="absolute left-0 top-0 z-0 flex size-full grow overflow-hidden bg-preview">
                            <div className="absolute left-[64%] top-[56%] h-0 w-[76%] -translate-x-2/4 -translate-y-2/4 rounded-full pt-[76%] opacity-40 blur-[240vw] [background:linear-gradient(132deg,#000000_0.00%,#a594fd8f_100.00%)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorRenderer