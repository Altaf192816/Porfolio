function SliderComponent() {
  return (
    <div className="flex max-[425px]:flex-col gap-4 px-4 w-72 text-center overflow-auto h-72 min-w-[200px]  max-[425px]:w-72 max-[320px]:w-48">
      <div
        className={`px-2 py-1 bg-slate-100 dark:text-white dark:bg-slate-600 flex flex-col gap-4  flex-wrap transition-colors duration-200 rounded-lg shadow-lg`}
      >
        <h4 className="font-bold text-lg drop-shadow-lg max-[425px]:text-base">
          Branding
        </h4>
        <p className="max-[425px]:text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum amet
          assume
        </p>
      </div>
      <div
        className={`px-2 py-1 bg-slate-100 dark:text-white dark:bg-slate-600 flex flex-col gap-4  flex-wrap transition-colors duration-200 rounded-lg shadow-lg`}
      >
        <h4 className="font-bold text-lg drop-shadow-lg max-[425px]:text-base">
          Design
        </h4>
        <p className="max-[425px]:text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum amet
          assume
        </p>
      </div>
      <div
        className={`px-2 py-1 bg-slate-100 dark:text-white dark:bg-slate-600 flex flex-col gap-4  flex-wrap transition-colors duration-200 rounded-lg shadow-lg`}
      >
        <h4 className="font-bold text-lg drop-shadow-lg max-[425px]:text-base">
          Development
        </h4>
        <p className="max-[425px]:text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum amet
          assume
        </p>
      </div>
      <div
        className={`px-2 py-1 bg-slate-100 dark:text-white dark:bg-slate-600 flex flex-col gap-4  flex-wrap transition-colors duration-200 rounded-lg shadow-lg`}
      >
        <h4 className="font-bold text-lg drop-shadow-lg max-[425px]:text-base">
          Copywritting
        </h4>
        <p className="max-[425px]:text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum amet
          assume
        </p>
      </div>
      <div
        className={`px-2 py-1 bg-slate-100 dark:text-white dark:bg-slate-600 flex flex-col gap-4 flex-wrap transition-colors duration-200 rounded-lg shadow-lg`}
      >
        <h4 className="font-bold text-lg drop-shadow-lg max-[425px]:text-base">
          SEO
        </h4>
        <p className="max-[425px]:text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum amet
          assume
        </p>
      </div>
    </div>
  );
}

export default SliderComponent;
