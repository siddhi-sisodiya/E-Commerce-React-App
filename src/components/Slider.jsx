import { useState, useEffect } from "react";
import s1 from "../assets/slider/slider1.png";
import s2 from "../assets/slider/slider2.png";
import s3 from "../assets/slider/slider3.png";

const Slider = () => {
  const slides = [
    {
      img: s1,
      title: "SPRING TRENDS",
      desc: "BEST SELLERS: MUST-HAVE WARDROBE PIECES.",
    },
    {
      img: s2,
      title: "SUMMER SALE",
      desc: "UP TO 50% OFF ON NEW ARRIVALS.",
    },
    {
      img: s3,
      title: "NEW COLLECTION",
      desc: "CHECK OUT THE LATEST FASHION.",
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  // 👉 NEXT
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  // 👉 PREV
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[80vh] bg-[#f5f5f5] flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-4 w-full">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={slides[index].img}
            className="h-[70vh] object-contain transition-all duration-500"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            {slides[index].title}
          </h1>

          <p className="text-gray-600">
            {slides[index].desc}
          </p>

          <button className="bg-[#088395] text-white px-6 py-2">
            SHOP NOW
          </button>
        </div>

      </div>

      {/* 🔥 LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ❮
      </button>

      {/* 🔥 RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ❯
      </button>

      {/* 🔥 DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === i ? "bg-[#088395]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Slider;