import { useState } from "react";

function ImageSlide({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  function handlePrev() {
    setActiveIndex((activeIndex) => (activeIndex - 1) % images?.at(0).length);
  }
  function handleNext() {
    setActiveIndex((activeIndex) => (activeIndex + 1) % images?.at(0).length);
    console.log(activeIndex);
  }
  return (
    <div className="flex items-center min-h-full min-w-full gap-4">
      <button
        onClick={handlePrev}
        className="rounded-full bg-black text-white px-2"
      >
        &#8249;
      </button>
      <img
        src={images?.at(0)[activeIndex]}
        alt="error loading image"
        className="min-h-full min-w-full"
      />
      <button
        onClick={handleNext}
        className="rounded-full bg-black text-white px-2"
      >
        &#8250;
      </button>
    </div>
  );
}

export default ImageSlide;
