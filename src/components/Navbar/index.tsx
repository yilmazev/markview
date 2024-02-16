import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Button from "../Button"

const Navbar: React.FC = () => {
    const pathname = usePathname()
    const isActive = (path: string) => path === pathname

    const NavLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Editor", path: "/editor" },
        { id: 3, name: "Changelog", path: "/changelog" },
        { id: 4, name: "Feedback", path: "/feedback" }
    ]

    return (
        <nav className="flex items-center justify-between py-9">
            <div className="relative">
                <Image src="/assets/images/logo-light.svg" alt="Markview Logo" width={190} height={30} priority={true} />
                <span className="absolute -right-12 -top-2 rounded-lg bg-primary-600 px-2 py-1 text-xs font-medium">Beta</span>
            </div>
            <ul className="flex items-center gap-2">
                {NavLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <Link href={link.path} className={`size-full rounded-xl px-5 py-2.5 transition-all duration-200 ${isActive(link.path) ? "bg-stone-700/50" : "hover:bg-stone-700/25"}`}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Link href="/editor">
                    <Button>Get started</Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar