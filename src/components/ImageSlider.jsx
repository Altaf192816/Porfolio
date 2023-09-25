import { useState } from "react";

function ImageSlider() {
  const [slide, setSlide] = useState(1);
  return (
    <>
      <div className="flex overflow-hidden  px-4 w-96 justify-center text-center max-[425px]:w-[100%] ">
        <img
          loading="lazy"
          className={`px-2 py-1 w-96  max-[425px]:w-72 absolute transition-opacity duration-300 ease-linear  rounded-2xl shadow-2xl ${
            slide === 1 ? "opacity-100" : "opacity-0"
          } `}
          src="thumb1.jpg"
          alt=""
        />
        <img
          loading="lazy"
          className={`px-2 py-1 w-96  max-[425px]:w-72 absolute transition-opacity duration-300 ease-linear  rounded-2xl shadow-2xl ${
            slide === 2 ? "opacity-100" : "opacity-0"
          }`}
          src="thumb2.jpg"
          alt=""
        />
        <img
          loading="lazy"
          className={`px-2 py-1 w-96  max-[425px]:w-72 absolute transition-opacity duration-300 ease-linear  rounded-2xl shadow-2xl ${
            slide === 3 ? "opacity-100" : "opacity-0"
          }`}
          src="thumb3.jpg"
          alt=""
        />
        <img
          loading="lazy"
          className={`px-2 py-1 w-96  max-[425px]:w-72 absolute transition-opacity duration-300 ease-linear  rounded-2xl shadow-2xl  ${
            slide === 4 ? "opacity-100" : "opacity-0"
          }`}
          src="thumb4.jpg"
          alt=""
        />
        <img
          loading="lazy"
          className={`px-2 py-1 w-96  max-[425px]:w-72 absolute transition-opacity duration-300 ease-linear  rounded-2xl shadow-2xl  ${
            slide === 5 ? "opacity-100" : "opacity-0"
          }`}
          src="thumb1.jpg"
          alt=""
        />
      </div>
      <div className="absolute bottom-[20%] left-[60%] flex gap-4 max-[768px]:bottom-[8%] max-[768px]:left-[40%]">
        <button
          className="bg-[--primary-color] px-1 rounded-3xl shadow-lg text-white dark:bg-[--secondary-color] transition-colors duration-200"
          onClick={() => slide > 1 && setSlide((i) => i - 1)}
        >
          &larr;
        </button>
        <button
          className="bg-[--primary-color] px-1 rounded-3xl shadow-lg text-white dark:bg-[--secondary-color] transition-colors duration-200"
          onClick={() => slide < 5 && setSlide((i) => i + 1)}
        >
          &rarr;
        </button>
      </div>
    </>
  );
}

export default ImageSlider;
