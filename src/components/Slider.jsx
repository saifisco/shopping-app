/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative lg:w-[80%] m-auto overflow-hidden">
      <div
        className=" flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full"
            style={{ transition: "opacity 1s ease" }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="ww-full rounded-[10px]"
            />
          </div>
        ))}
      </div>
      <button
        className="left-0 absolute top-1/2 -translate-y-1/2 bg-black text-white p-3 cursor-pointer z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="right-0 absolute top-1/2 -translate-y-1/2 bg-black text-white p-[10px] cursor-pointer z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}
