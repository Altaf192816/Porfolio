import { useState } from "react";
import { useDark } from "../context/DarkModeContext";

import { FaHtml5 } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

function TabComponent() {
  const { isDark } = useDark();
  const [tabContent, setTabContent] = useState(1);
  return (
    <div className="w-[50%] pt-32  flex flex-col items-center gap-10 max-[1024px]:pt-20 ">
      <div className="flex gap-16 bg-[--primary-color] py-1 px-6 rounded-2xl shadow-lg dark:bg-[--secondary-color] transition-colors duration-200  max-[768px]:gap-8  max-[768px]:text-sm max-[622px]:text-xs  max-[622px]:gap-4  max-[622px]:px-2  max-[425px]:gap-2   max-[375px]:px-0 flex-wrap  max-[375px]:w-[50%] justify-center">
        <button
          onClick={() => setTabContent(1)}
          className={`${
            tabContent === 1 ? "text-black bg-white" : "text-white"
          }  px-2 transition-all duration-300 ease-linear rounded-lg hover:text-black hover:bg-whittext-whitee`}
        >
          Skill
        </button>
        <button
          onClick={() => setTabContent(2)}
          className={`${
            tabContent === 2 ? "text-black bg-white" : "text-white"
          }  px-2 transition-all duration-300 ease-linear rounded-lg hover:text-black hover:bg-whittext-whitee`}
        >
          Experience
        </button>
        <button
          onClick={() => setTabContent(3)}
          className={`${
            tabContent === 3 ? "text-black bg-white" : "text-white"
          }  px-2 transition-all duration-300 ease-linear rounded-lg hover:text-black hover:bg-white`}
        >
          Credentials
        </button>
      </div>
      <div
        className={`${
          tabContent === 1 ? "scale-100" : "scale-0"
        } transition-transform duration-300 ease-linear absolute top-72 max-[1024px]:top-56   flex flex-col gap-2 px-16 max-[1024px]:px-8  max-[622px]:px-4 py-5 bg-slate-100 rounded-3xl shadow-xl dark:bg-slate-600 dark:text-white max-[768px]:text-sm max-[622px]:text-xs`}
      >
        <p>
          Webdevlopment-{" "}
          <FaHtml5
            className={`inline ${
              !isDark ? "text-[--primary-color]" : "text-[--secondary-color]"
            }`}
          />{" "}
          <DiCss3Full
            className={`inline ${
              !isDark ? "text-[--primary-color]" : "text-[--secondary-color]"
            }`}
          />{" "}
          <SiJavascript
            className={`inline ${
              !isDark ? "text-[--primary-color]" : "text-[--secondary-color]"
            }`}
          />{" "}
          <FaReact
            className={`inline ${
              !isDark ? "text-[--primary-color]" : "text-[--secondary-color]"
            }`}
          />{" "}
          <SiTailwindcss
            className={`inline ${
              !isDark ? "text-[--primary-color]" : "text-[--secondary-color]"
            }`}
          />
        </p>
        <p>
          UI/UX Design-{" "}
          <FaFigma
            className={`inline ${
              !isDark ? "text-[--primary-color]" : "text-[--secondary-color]"
            }`}
          />{" "}
          <SiCanva
            className={`inline ${
              !isDark ? "text-[--primary-color]" : "text-[--secondary-color]"
            }`}
          />
        </p>
      </div>
      <div
        className={`${
          tabContent === 2 ? "scale-100" : "scale-0"
        } transition-transform duration-300 ease-linear absolute top-72 max-[1024px]:top-56   flex flex-col gap-2 px-16 max-[1024px]:px-8  max-[622px]:px-4 py-5 bg-slate-100 rounded-3xl shadow-xl dark:bg-slate-600 dark:text-white max-[768px]:text-sm max-[622px]:text-xs`}
      >
        <p> UI/UX Designer - XYZ company - (fresher)</p>
        <p> Fronted Developer - XYZ company - (fresher)</p>
      </div>
      <div
        className={`${
          tabContent === 3 ? "scale-100" : "scale-0"
        } transition-transform duration-300 ease-linear absolute top-72 max-[1024px]:top-56   flex flex-col gap-2 px-16 max-[1024px]:px-8  max-[622px]:px-4 py-5 bg-slate-100 rounded-3xl shadow-xl dark:bg-slate-600 dark:text-white max-[768px]:text-sm max-[622px]:text-xs`}
      >
        <p> C language - Youtube -2022</p>
        <p> HTML,CSS - W3 school - 2022</p>
        <p> Javascript - Udemy - 2022</p>
        <p> Java with dsa - PepCoding - 2022</p>
        <p> React - Udemy - 2023</p>
      </div>
    </div>
  );
}

export default TabComponent;
