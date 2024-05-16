import { Link } from "react-router-dom";

function HomePageTitle() {
  return (
    <div className="flex flex-col  max-[768px]:h-[50%] gap-16  max-[768px]:gap-6 justify-center pl-44 pt-24 max-[1024px]:pl-32 max-[768px]:pl-4">
      <h1 className="text-5xl max-[1024px]:text-4xl poppins-font font-extrabold drop-shadow-xl dark:text-white transition-colors duration-200 max-[768px]:text-3xl">
        Transforming Ideas Into{" "}
        <span className="text-[--primary-color] dark:text-[--secondary-color] transition-colors duration-200">
          Digital Reality
        </span>
      </h1>
      <p className="drop-shadow-lg dark:text-white transition-colors duration-200  max-[768px]:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe
        necessitatibus, rerum, eligendi earum exercitationem beatae debitis ex
        laudantium numquam sint quo illo sunt corporis, iure eaque doloremque
        ipsum nisi.
      </p>
      <div className="animate-bounce w-28  max-[1024px]:w-20 shadow-xl rounded-3xl  max-[768px]:rounded-lg  max-[768px]:w-14">
        <Link to="/work">
          <button className="relative left-12 top-1/2 text-2xl text-white  max-[768px]:text-lg  max-[768px]:left-4">
            &rarr;
          </button>
        </Link>
        <img
          loading="lazy"
          src="rounded-text.png"
          alt=""
          className="bg-[--primary-color] w-28 max-[1024px]:w-20 max-[768px]:w-14 rounded-3xl  max-[768px]:rounded-lg shadow-lg dark:bg-[--secondary-color] transition-colors duration-200"
        />
      </div>
    </div>
  );
}

export default HomePageTitle;
