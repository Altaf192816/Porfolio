function AboutContent() {
  return (
    <div className="pl-44 pt-32 w-[50%] flex flex-col gap-12 max-[1024px]:pt-20 max-[1024px]:pl-32  max-[768px]:gap-14  max-[425px]:gap-20 max-[662px]:pl-8  max-[425px]:pl-2">
      <h1 className="text-5xl poppins-font font-extrabold drop-shadow-lg dark:text-white transition-colors duration-200 max-[860px]:text-4xl  max-[768px]:text-3xl  max-[425px]:text-2xl  max-[375px]:text-lg">
        Captivating{" "}
        <span className="text-[--primary-color] dark:text-[--secondary-color] transition-colors duration-200">
          stories
        </span>{" "}
        birth magnificent designs.
      </h1>
      <p className="dark:text-white transition-colors duration-200  max-[768px]:text-sm  max-[425px]:text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos harum
        facere, incidunt repellendus corporis odit veritatis perspiciatis?
        Quaerat dolore est minus aut iure? Rerum earum iure, natus facilis
        similique minima.
      </p>
      <table>
        <tbody>
          
        
        <tr className="text-4xl font-bold text-[--primary-color] gap-12  max-[768px]:text-2xl  max-[768px]:gap-6">
          <td>
            <li className="drop-shadow-lg dark:text-[--secondary-color] transition-colors duration-200 list-none   ">
              10+
            </li>
          </td>
          <td>
            <li className="drop-shadow-lg dark:text-[--secondary-color] transition-colors duration-200 list-none   ">
              250+
            </li>
          </td>
          <td>
            <li className="drop-shadow-lg dark:text-[--secondary-color] transition-colors duration-200 list-none   ">
              650+
            </li>
          </td>
          <td>
            <li className="drop-shadow-lg dark:text-[--secondary-color] transition-colors duration-200 list-none   ">
              8
            </li>
          </td>
        </tr>
        <tr className="text-xs gap-12  max-[768px]:gap-6">
          <td>
            <li className="list-none transition-colors duration-200 dark:text-white">
              Years of expirence
            </li>
          </td>
          <td>
            <li className="list-none transition-colors duration-200 dark:text-white">
              Satisfied client
            </li>
          </td>
          <td>  
            <li className="list-none transition-colors duration-200 dark:text-white">
              Finishedn project
            </li>
          </td>
          <td>
            <li className="list-none transition-colors duration-200 dark:text-white">
              Winning awards
            </li>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutContent;
