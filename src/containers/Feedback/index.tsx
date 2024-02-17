"use client"

import Button from "@/components/Button"
import { IconAlertCircle, IconCheckCircle, IconChevronDown } from "@/components/Icons"
import BaseLayout from "@/layouts/baseLayout"
import emailjs from "emailjs-com"
import Link from "next/link"
import React, { ChangeEvent, FormEvent, useState } from "react"

interface FormData {
    firstName: string
    lastName: string
    email: string
    subject: string
    message: string
}

const Feedback: React.FC = () => {
    const [ formData, setFormData ] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        subject: "General Review",
        message: ""
    })
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ isSuccess, setIsSuccess ] = useState<boolean>(false)
    const [ isError, setIsError ] = useState<boolean>(false)

    const isCompleteForm = !Object.values(formData).every((value) => !!value)

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            
            const formDataObject: Record<string, unknown> = {}
            Object.entries(formData).forEach(([ key, value ]) => {
                formDataObject[key] = value
            })
            
            await emailjs.send(serviceId, templateId, formDataObject, publicKey)
            setIsSuccess(true)
        } catch (error) {
            console.error("EmailJS Error:", error)
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <BaseLayout>
            <div className="mb-12 mt-6 flex flex-col items-center justify-center lg:mb-24 lg:mt-12">
                <div className="mb-6 flex flex-col items-center lg:mb-12">
                    <h1 className="mb-2 text-center text-2xl font-semibold md:text-3xl lg:mb-5 lg:text-4xl">
                        Send us your <span className="!bg-clip-text [-webkit-text-fill-color:#0000] [background:linear-gradient(0deg,#b1a5eb,#a594fd_90%)] [text-fill-color:#0000]"> Feedback</span>
                    </h1>
                    <p className="max-w-2xl text-center text-sm font-light text-white/75 lg:text-base">
                        We value your input! Share your thoughts, suggestions, or any issues you've experienced using MarkView. Your feedback is essential in helping us improve and provide a better experience.
                    </p>
                </div>
                <div className="relative max-w-md">
                    {!isError && !isSuccess && (
                        <div className="flex w-full justify-center">
                            <form className="flex w-full flex-col items-center">
                                <div className="mb-5 flex gap-4">
                                    <div className="w-full">
                                        <label htmlFor="firstName"className="block pb-2 font-medium text-stone-300">First name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-stone-700 bg-stone-900 px-5 py-3 placeholder:text-stone-600 focus:border-stone-600"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="lastName" className="block pb-2 font-medium text-stone-300">Last name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-stone-700 bg-stone-900 px-5 py-3 placeholder:text-stone-600 focus:border-stone-600"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5 w-full">
                                    <label htmlFor="email" className="block pb-2 font-medium text-stone-300">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-stone-700 bg-stone-900 px-5 py-3 placeholder:text-stone-600 focus:border-stone-600"
                                    />
                                </div>
                                <div className="mb-5 w-full">
                                    <label htmlFor="subject" className="block pb-2 font-medium text-stone-300">Subject</label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-stone-700 bg-stone-900 px-5 py-3 placeholder:text-stone-600 focus:border-stone-600"
                                        >
                                            <option>General Review</option>
                                            <option>Bug Report</option>
                                            <option>Feature Request</option>
                                            <option>Performance</option>
                                            <option>Thanks</option>
                                            <option>Other</option>
                                        </select>
                                        <IconChevronDown className="absolute right-2 top-2.5 size-8 stroke-stone-400" />
                                    </div>
                                </div>
                                <div className="mb-5 w-full">
                                    <label htmlFor="message" className="block pb-2 font-medium text-stone-300"> Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full resize-none rounded-xl border border-stone-700 bg-stone-900 px-5 py-3 placeholder:text-stone-600 focus:border-stone-600"
                                    />
                                </div>
                                <Button color="success" isFull={true} isLoading={isLoading} disabled={isCompleteForm} onClick={handleSubmit}>Send feedback</Button>
                            </form>
                        </div>
                    )}
                    {isSuccess && (
                        <div className="flex flex-col items-center rounded-xl bg-stone-900 px-6 py-12">
                            <IconCheckCircle className="mb-2 size-10 fill-none stroke-green-500 stroke-[1.5px]" />
                            <h2 className="mb-2 text-center text-xl font-semibold md:text-2xl lg:mb-5 lg:text-3xl">Thank you!</h2>
                            <p className="max-w-2xl text-center text-sm font-light text-white/75 lg:text-base">
                                Your feedback has been received! Thank you for your contribution. Every piece of feedback helps us improve MarkView. We will get back to you as soon as possible. Have a great day!
                            </p>
                        </div>
                    )}
                    {isError && (
                        <div className="flex flex-col items-center rounded-xl bg-stone-900 px-6 py-12">
                            <IconAlertCircle className="mb-2 size-10 fill-none stroke-red-500 stroke-[1.5px]" />
                            <h2 className="mb-2 text-center text-xl font-semibold md:text-2xl lg:mb-5 lg:text-3xl">An error occurred</h2>
                            <p className="max-w-2xl text-center text-sm font-light text-white/75 lg:text-base">
                                Sorry, an error occurred and your feedback could not be sent. Please try again later or contact us at <Link href="mailto:yilmaz.ev@outlook.com" className="font-medium text-primary-600">yilmaz.ev@outlook.com</Link> if the problem persists. We apologize for any inconvenience caused!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </BaseLayout>
    )
}

export default Feedback