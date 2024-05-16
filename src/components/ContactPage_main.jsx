function ContactPage_main() {
  return (
    <div className="flex flex-col gap-16 pt-32  items-center h-[90vh] max-[1279px]:gap-10  max-[1279px]:pt-16 ">
      <h1 className="text-5xl  max-[425px]:text-3xl font-bold drop-shadow-xl dark:text-white transition-colors duration-200 max-[768px]:text-4xl">
        Lets <span className="text-[--primary-color] dark:text-[--secondary-color] transition-colors duration-200">connect</span>{" "}
      </h1>
      <form action="email" method="post" className="flex flex-col gap-8 max-[768px]:gap-4 max-[768px]:items-center">
        <div className="flex gap-4 max-[768px]:flex-col max-[768px]:w-[70%]">
          <input className="border-2 px-3 max-[425px]:text-sm max-[768px]:w-[100%] py-2 rounded-lg border-[--primary-color] dark:border-[--secondary-color] dark:bg-[--secondary-bg-color] dark:text-white" placeholder="Name" type="text" />
          <input className="border-2 px-3 max-[425px]:text-sm max-[768px]:w-[100%] py-2 rounded-lg  border-[--primary-color] dark:border-[--secondary-color]  dark:bg-[--secondary-bg-color] dark:text-white" placeholder="Email" type="email" />
        </div>
        <input className="border-2 px-3 max-[425px]:text-sm max-[768px]:w-[70%] py-2 rounded-lg border-[--primary-color] dark:border-[--secondary-color]  dark:bg-[--secondary-bg-color] dark:text-white" placeholder="Subject" type="text" />
        <textarea className="border-2 px-3 max-[425px]:text-sm max-[768px]:w-[70%] rounded-lg text-s border-[--primary-color] dark:border-[--secondary-color]  dark:bg-[--secondary-bg-color] dark:text-white" rows={10} cols={50} placeholder="Message" type="text" />
        <button className="w-20 bg-[--primary-color] py-1 px-2 rounded-lg text-white  hover:text-black transition-colors duration-300 shadow-lg dark:bg-[--secondary-color]">Lets Talk</button>
      </form>
    </div>
  );
}

export default ContactPage_main;
