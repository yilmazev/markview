import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import Button from "../Button"
import { IconMenuRightAlt, IconTimes } from "../Icons"

const Navbar: React.FC = () => {
    const pathname = usePathname()
    const [ isMenuActive, setIsMenuActive ] = useState<boolean>(false)

    const menuRef = useRef<HTMLDivElement | null>(null)

    const isActive = (path: string) => path === pathname

    const NavLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Editor", path: "/editor" },
        { id: 3, name: "Changelog", path: "/changelog" },
        { id: 4, name: "Feedback", path: "/feedback" }
    ]

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuActive(false)
                document.body.classList.remove("overflow-hidden")
            }
        }        

        if (isMenuActive) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.body.classList.remove("overflow-hidden")
        }
    }, [ menuRef, isMenuActive ])

    return (
        <nav ref={menuRef} className="flex items-center justify-between py-9">
            <Link href="/" className="relative block h-[30px] w-[150px] lg:w-[190px]" aria-label="Home">
                <Image src="/assets/images/logo-light.svg" alt="Markview Logo" width={190} height={30} priority={true} />
                <span className="absolute -right-12 -top-2 rounded-lg bg-primary-600 px-2 py-1 text-xs font-medium">Beta</span>
            </Link>
            <div className="block lg:hidden">
                <button onClick={toggleMenu}>
                    <IconMenuRightAlt className="size-7 cursor-pointer fill-white lg:size-9" />
                </button>
                <div className={`fixed right-0 top-0 z-50 min-h-screen w-full max-w-none bg-stone-900 shadow-2xl transition-transform duration-300 sm:max-w-xs ${isMenuActive ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex items-center justify-between border-b border-stone-800 p-6">
                        <Link href="/" className="relative block h-[30px] w-[150px] lg:w-[190px]" aria-label="Home">
                            <Image src="/assets/images/logo-light.svg" alt="Markview Logo" width={190} height={30} priority={true} />
                            <span className="absolute -right-12 -top-2 rounded-lg bg-primary-600 px-2 py-1 text-xs font-medium">Beta</span>
                        </Link>
                        <div onClick={toggleMenu}>
                            <IconTimes className="size-6 stroke-white stroke-2" />
                        </div>
                    </div>
                    <div className="p-6">
                        <ul>
                            {NavLinks.map((link) => {
                                return <li key={link.id} className="py-3">
                                    <Link
                                        href={link.path}
                                        className={`${isActive(link.path) ? "text-white" : "text-white/50"}`}
                                        aria-label={link.name}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            })}
                        </ul>
                        <Link href="/editor" className="mt-6 block" aria-label="Get started">
                            <Button size="small">Get started</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <ul className="flex items-center gap-2">
                    {NavLinks.map((link) => {
                        return <li key={link.id}>
                            <Link
                                href={link.path}
                                className={`size-full rounded-xl px-5 py-2.5 transition-all duration-200 ${isActive(link.path) ? "bg-stone-700/50" : "hover:bg-stone-700/25"}`}
                                aria-label={link.name}
                            >
                                {link.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className="hidden lg:block">
                <Link href="/editor" aria-label="Get started">
                    <Button>Get started</Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar