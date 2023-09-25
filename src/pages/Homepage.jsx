import HomePage_main from "../components/HomePage_main"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"

function Homepage() {
    return (
        <div className="bg-[--primary-bg-color] h-[100vh] dark:bg-[--secondary-bg-color]  transition-colors duration-200">
          <Nav />
          <Sidebar />
         <HomePage_main/>
        </div>
    )
}

export default Homepage
