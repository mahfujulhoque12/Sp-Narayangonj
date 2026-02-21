"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import img1 from "../../../public/home/1.jpg";
import img2 from "../../../public/home/2.jpg";
import img3 from "../../../public/home/3.jpg";

const images = [img1, img2, img3];

const Hero = () => {
  // Loop + autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay?.play();
    }
  }, [emblaApi]);

  return (
    <div className="wrapper mt-10 flex flex-col md:flex-row gap-5">
      {/* Left Side Static Image */}
      <div className="w-full md:w-[40%] shadow-sm border border-gray-200 rounded-xl">
        <img
          src="/home/sp.jpg"
          alt="Static"
          className="w-full object-contain h-[280px] md:h-[350px]"
        />
        <h2 className=" head-1 text-center mt-3">
          মোহাম্মদ মিজানুর রহমান মুন্সী
        </h2>
        <h3 className="head-2 text-center">পুলিশ সুপার, নারায়ণগঞ্জ</h3>
        <p className="para-1 text-black! text-center">০১৩২০০৯০৩০০</p>
      </div>

      {/* Right Side Slider */}
      <div className="w-full md:w-[60%]  ">
        <div className="embla overflow-hidden relative" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="embla__slide flex-shrink-0 w-full h-[350px] md:h-[450px] shadow-sm"
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
