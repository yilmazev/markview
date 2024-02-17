"use client"

import { IconQuote } from "@/components/Icons"
import testimonialsData from "@/services/data/testimonials.json"

const Testimonials: React.FC = () => {
    return (
        <div className="mb-12 mt-6 flex flex-col items-center justify-center lg:mb-24 lg:mt-12">
            <div className="mb-6 flex flex-col items-center lg:mb-12">
                <h1 className="mb-2 text-center text-2xl font-semibold md:text-3xl lg:mb-4 lg:text-4xl">
                    An Adored Tool by Over <span className="!bg-clip-text [-webkit-text-fill-color:#0000] [background:linear-gradient(0deg,#b1a5eb,#a594fd_90%)] [text-fill-color:#0000]">100</span> Users</h1>
                <p className="max-w-lg text-center text-sm font-light text-white/75 lg:text-base">
                    Dive into the experiences of individuals who have given Markview a try. Discover the stories that showcase the meaningful impact this tool has made in the lives of our users!
                </p>
            </div>
            <div className="block w-full space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
                {testimonialsData.map((testimonial: any, index: number) => (
                    <div key={index} className={`relative break-inside-avoid rounded-xl border border-stone-600 bg-stone-800 p-6 ${testimonial.isTop && "xl:top-16"}`}>
                        <div className="relative p-6">
                            <IconQuote className="absolute left-0 top-0 size-6 fill-transparent stroke-primary-600 stroke-2" />
                            <p className="text-base lg:text-xl">{testimonial.comment}</p>
                        </div>
                        <div className="flex space-y-1.5 p-6 pt-0">
                            <span className="text-sm text-stone-300 lg:text-lg">{testimonial.author}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials