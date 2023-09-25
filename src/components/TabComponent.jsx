import { useState } from "react";

function TabComponent() {
    const [tabContent, setTabContent] = useState(1);
    return (
        <div className="w-[50%] pt-32  flex flex-col items-center gap-10 max-[1024px]:pt-20 ">
        <div className="flex gap-16 bg-[--primary-color] py-1 px-6 rounded-2xl shadow-lg dark:bg-[--secondary-color] transition-colors duration-200  max-[768px]:gap-8  max-[768px]:text-sm max-[622px]:text-xs  max-[622px]:gap-4  max-[622px]:px-2  max-[425px]:gap-2   max-[375px]:px-0 flex-wrap  max-[375px]:w-[50%] justify-center">
          <button
            onClick={() => setTabContent(1)}
            className="text-white hover:text-black hover:bg-white px-2 rounded-lg transition-all duration-300 ease-linear"
          >
            Skill
          </button>
          <button
            onClick={() => setTabContent(2)}
            className="text-white hover:text-black hover:bg-white px-2 rounded-lg transition-all duration-300 ease-linear"
          >
            Experience
          </button>
          <button
            onClick={() => setTabContent(3)}
            className="text-white hover:text-black hover:bg-white px-2 rounded-lg transition-all duration-300 ease-linear"
          >
            Credentials
          </button>
        </div>
        <div
          className={`${
            tabContent === 1 ? "scale-100" : "scale-0"
          } transition-transform duration-300 ease-linear absolute top-72 max-[1024px]:top-56   flex flex-col gap-2 px-16 max-[1024px]:px-8  max-[622px]:px-4 py-5 bg-slate-100 rounded-3xl shadow-xl dark:bg-slate-600 dark:text-white max-[768px]:text-sm max-[622px]:text-xs`}
        >
          <p>Webdevlopment-🔗✖️👆🏼⏰➡️</p>
          <p>UI/UX Design-➡️⏰👆🏼✖️🔗👆</p>
        </div>
        <div
          className={`${
            tabContent === 2 ? "scale-100" : "scale-0"
          } transition-transform duration-300 ease-linear absolute top-72 max-[1024px]:top-56   flex flex-col gap-2 px-16 max-[1024px]:px-8  max-[622px]:px-4 py-5 bg-slate-100 rounded-3xl shadow-xl dark:bg-slate-600 dark:text-white max-[768px]:text-sm max-[622px]:text-xs`}
        >
          <p> UI/UX Designer - XYZ company - 2021-2022</p>
          <p> Fronted Developer - XYZ company - 2022-2023 </p>
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
    )
}

export default TabComponent
