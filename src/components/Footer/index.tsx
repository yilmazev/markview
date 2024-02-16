import Link from "next/link"
import Button from "../Button"
import { IconGithub, IconLinkedIn, IconMail, IconMessageSquare } from "../Icons"

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative">
            <div className="flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24">
                <div className="max-w-xl">
                    <h4 className="mb-1 text-center text-lg font-semibold lg:text-left">Send Feedback 💫</h4>
                    <p className="text-center text-sm text-white/75 lg:text-left">Share any issues, suggestions, or satisfaction you've encountered while using MarkView. Your feedback will help us enhance MarkView to be even better.</p>
                </div>
                <Link href="/feedback" aria-label="Feedback">
                    <Button variant="secondary" size="small">
                        <IconMessageSquare className="size-4 fill-none stroke-stone-400 stroke-2" />
                        Feedback
                    </Button>
                </Link>
            </div>
            <div className="my-8 flex flex-col items-center justify-between gap-4 border-t border-stone-900 pt-6 lg:flex-row lg:gap-16">
                <p className="text-sm font-light text-stone-400/50 lg:text-base">Design and coding <Link href="https://yilmazev.dev" className="font-medium" aria-label="Yilmaz Ev">Yilmaz Ev</Link> © {currentYear}</p>
                <ul className="flex items-center justify-end gap-1 md:gap-3">
                    <li className="border-b-2 border-transparent transition duration-200">
                        <Link href="mailto:yilmaz.ev@outlook.com" target="_blank" className="block size-full" aria-label="Email address">
                            <div className="flex size-9 items-center justify-center rounded-full hover:bg-stone-800/50">
                                <IconMail className="size-6 fill-stone-600" />
                            </div>
                        </Link>
                    </li>
                    <li className="border-b-2 border-transparent transition duration-200">
                        <Link href="https://github.com/yilmazev/markview" target="_blank" className="block size-full" aria-label="Github">
                            <div className="flex size-9 items-center justify-center rounded-full hover:bg-stone-800/50">
                                <IconGithub className="size-6 fill-stone-600" />
                            </div>
                        </Link>
                    </li>
                    <li className="border-b-2 border-transparent transition duration-200">
                        <Link href="https://www.linkedin.com/in/yilmazev/" target="_blank" className="block size-full" aria-label="LinkedIn">
                            <div className="flex size-9 items-center justify-center rounded-full hover:bg-stone-800/50">
                                <IconLinkedIn className="size-6 fill-stone-600" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer