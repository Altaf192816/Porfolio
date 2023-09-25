function TestimonialTitle() {
  return (
    <h1 className="text-5xl max-[320px]:text-3xl font-bold drop-shadow-lg dark:text-white transition-colors duration-200 max-[768px]:text-4xl">
      What Client{" "}
      <span className="text-[--primary-color] dark:text-[--secondary-color] transition-colors duration-200">
        says.
      </span>
    </h1>
  );
}

export default TestimonialTitle;
