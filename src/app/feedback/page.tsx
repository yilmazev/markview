import Feedback from "@/containers/Feedback"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Markview - Feedback",
    description: "We value your input! Share your thoughts, suggestions, or any issues you've experienced using MarkView. Your feedback is essential in helping us improve and provide a better experience."
}

export default function PageFeedback() {
    return (
        <Feedback />
    )
}