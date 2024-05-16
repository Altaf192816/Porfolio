import ReviewSlider from "./ReviewSlider";
import TestimonialTitle from "./TestimonialTitle";

function TestimonialPage_main() {
  return (
    <div className="flex pt-44 items-center flex-col h-[90vh] gap-20">
      <TestimonialTitle />
      <ReviewSlider />
    </div>
  );
}

export default TestimonialPage_main;
