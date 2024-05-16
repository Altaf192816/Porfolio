import ContactPage_main from "../components/ContactPage_main"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"

function Contact() {
    return (
        <div className="bg-[--primary-bg-color] h-[100vh] dark:bg-[--secondary-bg-color]  transition-colors duration-200 overflow-y-auto">
          <Nav/>
          <Sidebar />
          <ContactPage_main/>
        </div>
    )
}

export default Contact
