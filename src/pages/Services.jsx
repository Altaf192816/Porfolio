import Nav from "../components/Nav"
import ServicePage_main from "../components/ServicePage_main"
import Sidebar from "../components/Sidebar"

function Services() {
    return (
        <div className="bg-[--primary-bg-color] h-[100vh] dark:bg-[--secondary-bg-color]  transition-colors duration-200">
        <Nav/>
        <Sidebar />
        <ServicePage_main />
      </div>
    )
}

export default Services
