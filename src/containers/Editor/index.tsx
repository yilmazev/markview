"use client"

import Button from "@/components/Button"
import { IconDownload } from "@/components/Icons"
import "@/styles/github.min.css"
import { saveAs } from "file-saver"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import Editor from "react-simple-code-editor"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"

const EditorRenderer: React.FC = () => {
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

    return (
        <div className="h-screen max-h-screen">
            <div className="h-full">
                <div className="flex h-20 items-center justify-between border-b border-stone-700 bg-stone-900 px-10 py-6">
                    <Link href="/" className="relative block h-[30px] w-[150px] lg:w-[190px]" aria-label="Home">
                        <Image src="/assets/images/logo-light.svg" alt="Markview Logo" width={190} height={30} priority={true} />
                        <span className="absolute -right-12 -top-2 rounded-lg bg-primary-600 px-2 py-1 text-xs font-medium">Beta</span>
                    </Link>
                    <Button size="small" onClick={downloadMarkdown}>
                        <IconDownload className="size-6 fill-none stroke-white stroke-[1.5px]" />
                        Download
                    </Button>
                </div>
                <div className="flex h-[calc(100%-80px)] w-full gap-[1px] bg-stone-700">
                    <div className="markdown-code w-1/2 bg-stone-800">
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
                    <div className="markdown-preview relative w-1/2 px-12 pt-6">
                        <ReactMarkdown className="relative z-10 size-full overflow-auto" remarkPlugins={[ remarkGfm, remarkHtml ]}>
                            {markdown}
                        </ReactMarkdown>
                        <div className="background">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorRenderer