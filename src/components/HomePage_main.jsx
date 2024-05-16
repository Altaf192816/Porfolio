import { useDark } from "../context/DarkModeContext";
import HomePageTitle from "./HomePageTitle";

function HomePage_main() {
  const { isDark } = useDark();
  return (
    <div className="h-[90vh] flex max-[768px]:flex-col max-[630px]:flex-col">
      <HomePageTitle />
      <img
        loading="lazy"
        // src={`${isDark ? "altafblack.png" : "altaf.png"}`}
        src="altaf.png"
        alt=""
        className={`object-contain self-end w-[60%] h-[70%] max-[1024px]:w-[40%] max-[1024px]:h-[50%]  max-[768px]:h-[50%]  max-[768px]:w-[100%] ${
          isDark ? "invert-photo" : ""
        }`}
      />
    </div>
  );
}

export default HomePage_main;
