import BaseLayout from "@/layouts/baseLayout"
import Hero from "./Views/Hero"
import Testimonials from "./Views/Testimonials"

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
            <Testimonials />
        </BaseLayout>
    )
}

export default Home