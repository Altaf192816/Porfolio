import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import TestimonialPage_main from "../components/TestimonialPage_main"

function Testimonials() {
    return (
        <div className="bg-[--primary-bg-color] h-[100vh] dark:bg-[--secondary-bg-color]  transition-colors duration-200 ">
        <Nav/>
        <Sidebar />
        <TestimonialPage_main />
      </div>
    )
}

export default Testimonials
