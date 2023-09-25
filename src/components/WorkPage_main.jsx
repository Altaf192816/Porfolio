import ImageSlider from "./ImageSlider";
import WorkTitle from "./WorkTitle";

function WorkPage_main() {

  return (
    <div className="h-[90vh] flex justify-center items-center max-[768px]:flex-col max-[768px]:justify-start max-[768px]:pt-32 max-[768px]:gap-10">
      <WorkTitle/>
      <ImageSlider/>
    </div>
  );
}

export default WorkPage_main;
