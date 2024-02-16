"use client"

import { Quote } from "@/components/Icons"
import testimonialsData from "@/services/data/testimonials.json"

const Testimonials: React.FC = () => {
    return (
        <div className="mb-24 mt-12 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <h2 className="mb-4 text-center text-4xl font-semibold">
                    An Adored Tool by Over <span className="!bg-clip-text [-webkit-text-fill-color:#0000] [background:linear-gradient(0deg,#b1a5eb,#a594fd_90%)] [text-fill-color:#0000]">100</span> Users</h2>
                <p className="mb-8 max-w-lg text-center font-light text-white/75">
                    Dive into the experiences of individuals who have given Markview a try. Discover the stories that showcase the meaningful impact this tool has made in the lives of our users!
                </p>
            </div>
            <div className="block w-full space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
                {testimonialsData.map((testimonial: any, index: number) => (
                    <div key={index} className={`relative break-inside-avoid rounded-xl border border-stone-600 bg-stone-800 p-6 ${testimonial.isTop && "xl:top-16"}`}>
                        <div className="relative p-6">
                            <Quote className="absolute left-0 top-0 size-6 fill-transparent stroke-primary-600 stroke-2" />
                            <p className="text-xl">{testimonial.comment}</p>
                        </div>
                        <div className="flex space-y-1.5 p-6 pt-0">
                            <span className="text-lg text-stone-300">{testimonial.author}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials