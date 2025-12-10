import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    image: "https://picsum.photos/seed/safari-world-bkk/1920/1080",
    title: "Safari World & Marine Park",
    subtitle: "Experience the wild in Bangkok"
  },
  {
    image: "https://picsum.photos/seed/coral-island-pattaya/1920/1080",
    title: "Coral Island Pattaya",
    subtitle: "Crystal clear waters and white sands"
  },
  {
    image: "https://picsum.photos/seed/wat-traimit-golden/1920/1080",
    title: "Golden Buddha Temple",
    subtitle: "Spiritual journey at Wat Traimit"
  },
  {
    image: "https://picsum.photos/seed/bangkok-city-night/1920/1080",
    title: "Bangkok Skyline",
    subtitle: "The vibrant city of angels"
  }
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 animate-[fadeInUp_1s_ease-out] drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl font-light animate-[fadeInUp_1.2s_ease-out] drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <i className="fas fa-chevron-left text-2xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <i className="fas fa-chevron-right text-2xl"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;