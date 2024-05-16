import { useDark } from "../context/DarkModeContext";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

function Nav() {
  const { isDark, setIsDark } = useDark();
  return (
    <div className="flex justify-around py-6 h-[10vh] ">
      <div>
        <h1 className="text-5xl max-[1024px]:text-4xl max-[425px]:text-3xl  max-[375px]:text-2xl text-[--primary-color] flex gap-2 sora-font drop-shadow-md dark:text-[--secondary-color]  transition-colors duration-200">
          <span className="font-extrabold">Altaf</span>
          <span className="font-thin poppins-font">Hussain</span>
        </h1>
      </div>
      <div className="flex gap-6 items-center max-[425px]:gap-3">
        <a href="https://www.youtube.com/@redsharingan6190/featured">
          <FiYoutube className={`w-5 max-[425px]:w-3  max-[375px]:w-2 ${isDark ? "text-white" : "text-black"} `} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100011374446267">
          <AiOutlineFacebook
            className={`w-4 max-[425px]:w-5  max-[375px]:w-2 ${isDark ? "text-white" : "text-black"} `}
          />
        </a>
        <a href="https://www.instagram.com/altaf1166/">
          <FaInstagram className={`w-5 max-[425px]:w-3  max-[375px]:w-2 ${isDark ? "text-white" : "text-black"} `} />
        </a>
        <a href="https://twitter.com/altaf2816">
          <FiTwitter className={`w-5 max-[425px]:w-3  max-[375px]:w-2 ${isDark ? "text-white" : "text-black"} `} />
        </a>
        <a href="https://github.com/Altaf192816">
          <LuGithub className={`w-5 max-[425px]:w-3  max-[375px]:w-2 ${isDark ? "text-white" : "text-black"} `} />
        </a>
        <div>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setIsDark((is) => !is);
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
