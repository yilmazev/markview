"use client"

import Button from "@/components/Button"
import { Heart } from "@/components/Icons"
import Image from "next/image"

const Home: React.FC = () => {
    return (
        <main className="flex items-center justify-center">
            <header className="relative flex min-h-svh w-full justify-center bg-headerGrid bg-cover bg-center bg-no-repeat pt-8">
                <div className="w-full max-w-7xl px-7">
                    <nav className="flex items-center justify-between">
                        <div>
                            <Image src="/assets/images/logo-light.svg" alt="Project Logo" width={130} height={70} priority={true} />
                        </div>
                        <div>
                            right
                        </div>
                    </nav>
                    <div className="my-24 flex flex-col items-center justify-center">
                        <div className="mb-32 flex flex-col items-center">
                            <h1 className="mb-6 text-center text-6xl font-semibold">
                                Quickly create <span className="!bg-clip-text [-webkit-text-fill-color:#0000] [background:linear-gradient(0deg,#b1a5eb,#a594fd_90%)] [text-fill-color:#0000]">README.md</span>
                            </h1>
                            <p className="mb-8 max-w-3xl text-center text-lg font-light text-white/75">
                                MarkView offers the ability to quickly and effectively create stylish Markdown files, instantly enhancing your content. Add styles effortlessly and check the visual appeal of your content right away!
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
                        <div className="flex items-center gap-32">
                            <div className=" rounded-xl bg-stone-900 p-4">
                                <div>Preview markdown</div>
                            </div>
                            <div className=" rounded-xl bg-stone-900 p-4">
                                <div>Pure markdown code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </main>
    )
}

export default Home