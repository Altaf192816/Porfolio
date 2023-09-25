import { useDark } from "../context/DarkModeContext";

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
          <img
            loading="lazy"
            src="youtube.png"
            alt="youtube-icon"
            className="w-5 max-[425px]:w-3  max-[375px]:w-2"
          />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100011374446267">
          <img
            loading="lazy"
            src="facebook.png"
            alt="youtube-icon"
            className="w-4 max-[425px]:w-3  max-[375px]:w-2"
          />
        </a>
        <a href="https://www.instagram.com/altaf1166/">
          <img
            loading="lazy"
            src="instagram.png"
            alt="youtube-icon"
            className="w-4 max-[425px]:w-3  max-[375px]:w-2"
          />
        </a>
        <a href="https://twitter.com/altaf2816">
          <img
            loading="lazy"
            src="twitter.png"
            alt="youtube-icon"
            className="w-5 max-[425px]:w-3  max-[375px]:w-2"
          />
        </a>
        <a href="https://github.com/Altaf192816">
          <img
            loading="lazy"
            src="github.png"
            alt="youtube-icon"
            className="w-5 max-[425px]:w-3  max-[375px]:w-2"
          />
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
