import ServicesTitle from "./ServicesTitle";
import SliderComponent from "./SliderComponent";

function ServicePage_main() {
  return (
    <div className="h-[90vh] flex justify-center gap-10 items-center max-[768px]:p-40 max-[425px]:flex-col  max-[425px]:justify-start  max-[425px]:pt-32  max-[425px]:gap-16">
      <ServicesTitle/>
      <SliderComponent/>
    </div>
  );
}

export default ServicePage_main;
