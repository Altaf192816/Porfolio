import { useState } from "react";
import {NavLink } from "react-router-dom";

function Sidebar() {
    const [open,setOpen] = useState(0);
  return (
    <div>
      <nav className="flex flex-col max-[768px]:flex-row max-[768px]:rounded-none max-[768px]:top-20 max-[768px]:w-[100vw] max-[768px]:justify-evenly max-[768px]:left-0 gap-6 px-2 py-6  max-[768px]:py-2  max-[768px]:px-1  shadow-xl bg-slate-200 rounded-2xl absolute right-10 max-[1024px]:right-5 top-[40%] dark:bg-slate-600  transition-colors duration-200">
        <NavLink to="/">
          <img loading="lazy" src="home.png" alt="home/png" className="w-6  max-[768px]:w-4" onMouseEnter={()=>setOpen(1)} onMouseLeave={()=>setOpen(0)}/>
        </NavLink>
        <NavLink to="/about">
          <img loading="lazy" src="about.png" alt="about/png" className="w-6  max-[768px]:w-4"  onMouseEnter={()=>setOpen(2)} onMouseLeave={()=>setOpen(0)} />
        </NavLink>
        <NavLink to="/services">
          <img loading="lazy" src="service.png" alt="service/png" className="w-6  max-[768px]:w-4"  onMouseEnter={()=>setOpen(3)} onMouseLeave={()=>setOpen(0)} />
        </NavLink>
        <NavLink to="/work">
          <img loading="lazy" src="work.png" alt="work/png" className="w-6  max-[768px]:w-4"  onMouseEnter={()=>setOpen(4)} onMouseLeave={()=>setOpen(0)} />
        </NavLink>
        <NavLink to="/testimonials">
          <img loading="lazy" src="tetsimonial.png" alt="testimonial.png" className="w-6  max-[768px]:w-4"  onMouseEnter={()=>setOpen(5)} onMouseLeave={()=>setOpen(0)} />
        </NavLink>
        <NavLink to="/contact">
          <img loading="lazy" src="contact.png" alt="contact.png" className="w-6  max-[768px]:w-4"  onMouseEnter={()=>setOpen(6)} onMouseLeave={()=>setOpen(0)} />
        </NavLink>
      </nav>
      <div className=" flex flex-col  max-[768px]:hidden gap-6 px-2 py-6 absolute right-20 top-[40%] text-center">
        <p className={`bg-[#92929233] rounded-3xl ${open===1 ? "scale-100" : "scale-0"} transition-transform  duration-300 ease-out z-10 dark:text-white`}>Home</p>
        <p className={`bg-[#92929233] rounded-3xl  ${open===2 ? "scale-100" : "scale-0"} transition-transform  duration-300 ease-out z-10 dark:text-white`}>About</p>
        <p className={`bg-[#92929233] rounded-3xl  ${open===3 ? "scale-100" : "scale-0"} transition-transform  duration-300 ease-out z-10 dark:text-white`}>Services</p>
        <p className={`bg-[#92929233] rounded-3xl  ${open===4 ? "scale-100" : "scale-0"} transition-transform  duration-300 ease-out z-10 dark:text-white`}>Work</p>
        <p className={`bg-[#92929233] rounded-3xl  ${open===5 ? "scale-100" : "scale-0"} transition-transform  duration-300 ease-out z-10 dark:text-white`}>Testimonial</p>
        <p className={`bg-[#92929233] rounded-3xl  ${open===6 ? "scale-100" : "scale-0"} transition-transform  duration-300 ease-out z-10 dark:text-white`}>Contact</p>
      </div>
    </div>
  );
}

export default Sidebar;
