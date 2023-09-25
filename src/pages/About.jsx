import { AboutPage_main } from "../components/AboutPage_main"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"

function About() {
    return (
        <div className="bg-[--primary-bg-color] h-[100vh] dark:bg-[--secondary-bg-color]  transition-colors duration-200">
          <Nav/>
          <Sidebar />
          <AboutPage_main />
        </div>
    )
}

export default About
