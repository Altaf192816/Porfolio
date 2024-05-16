import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import WorkPage_main from "../components/WorkPage_main"

function Work() {
    return (
        <div className="bg-[--primary-bg-color] h-[100vh] dark:bg-[--secondary-bg-color]  transition-colors duration-200 ">
        <Nav/>
        <Sidebar />
        <WorkPage_main />
      </div>
    )
}

export default Work
