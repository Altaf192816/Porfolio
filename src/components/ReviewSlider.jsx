import { useState } from "react";

function ReviewSlider() {
  const [slide, setSlide] = useState(1);
  return (
    <div className="flex gap-16">
      <button
        className="bg-[--primary-color] px-1 rounded-3xl  shadow-lg h-min text-white dark:bg-[--secondary-color] transition-colors duration-200"
        onClick={() => slide > 1 && setSlide((s) => s - 1)}
      >
        &larr;
      </button>
      <div className="flex w-72  max-[768px]:w-32 max-[320px]:w-20">
        <div
          className={`w-72 max-[768px]:w-32 max-[320px]:w-20 flex flex-col  items-center  absolute gap-6 ${
            slide === 1 ? "scale-100" : "scale-0"
          } transition-transform duration-300 ease-linear`}
        >
          <img loading="lazy" className="w-20 max-[768px]:w-10" src="t-avt-1.png" alt="" />
          <p className="text-center dark:text-white transition-colors duration-200 max-[768px]:text-sm max-[320px]:text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            voluptatem dolorem architecto odit incidunt consectetur!
          </p>
        </div>
        <div
          className={`w-72 flex flex-col max-[768px]:w-32 max-[320px]:w-20  items-center   absolute gap-6 ${
            slide === 2 ? "scale-100" : "scale-0"
          } transition-transform duration-300 ease-linear`}
        >
          <img loading="lazy" className="w-20 max-[768px]:w-10" src="t-avt-2.png" alt="" />
          <p className="text-center dark:text-white transition-colors duration-200 max-[768px]:text-sm max-[320px]:text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            voluptatem dolorem architecto odit incidunt consectetur!
          </p>
        </div>
        <div
          className={`w-72 flex flex-col max-[768px]:w-32 max-[320px]:w-20  items-center   absolute gap-6 ${
            slide === 3 ? "scale-100" : "scale-0"
          } transition-transform duration-300 ease-linear`}
        >
          <img loading="lazy" className="w-20 max-[768px]:w-10" src="t-avt-3.png" alt="" />
          <p className="text-center dark:text-white transition-colors duration-200 max-[768px]:text-sm max-[320px]:text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            voluptatem dolorem architecto odit incidunt consectetur!
          </p>
        </div>
      </div>
      <button
        className="bg-[--primary-color] px-1 rounded-3xl  shadow-lg h-min text-white dark:bg-[--secondary-color] transition-colors duration-200"
        onClick={() => slide < 3 && setSlide((s) => s + 1)}
      >
        &rarr;
      </button>
    </div>
  );
}

export default ReviewSlider;
