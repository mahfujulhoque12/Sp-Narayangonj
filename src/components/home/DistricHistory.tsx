import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router";

import img1 from "../../../public/home/e1.jpg";
import img2 from "../../../public/home/e2.jpg";
import img3 from "../../../public/home/e3.jpg";

const images = [img1, img2, img3];

const DistricHistory = () => {
  // ✅ Important: store plugin in useRef (best practice)
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    }),
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <section className="wrapper mb-10 bg-brand p-5 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
        {/* Left - Slider */}
        <div className="w-full md:w-[40%] h-full">
          <div className="overflow-hidden rounded-xl h-full" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((img, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full">
                  <img
                    src={img}
                    alt={`Narayanগঞ্জ slide ${index + 1}`}
                    className="w-full h-[320px] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-[60%] text-white shadow-sm border border-gray-600 rounded-xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="head-4   text-start! mb-4">
              নারায়ণগঞ্জ জেলার ইতিহাস
            </h2>

            <p className="text-gray-100 text-sm leading-relaxed">
              নারায়ণগঞ্জ জেলা বাংলাদেশের একটি গুরুত্বপূর্ণ শিল্প ও বাণিজ্যিক
              অঞ্চল। শীতলক্ষ্যা নদীর তীরে অবস্থিত এই জেলা প্রাচীনকাল থেকেই
              ব্যবসা-বাণিজ্যের জন্য সুপরিচিত। ব্রিটিশ আমলে এটি পাট শিল্পের
              কেন্দ্র হিসেবে খ্যাতি অর্জন করে এবং “ডান্ডি অব দ্য ইস্ট” নামে
              পরিচিতি লাভ করে।
            </p>

            <p className="text-gray-100 text-sm leading-relaxed mt-4">
              নারায়ণগঞ্জ বাংলাদেশের নারায়ণগঞ্জ জেলায় অবস্থিত একটি শহর। ১৯৮৪
              সালে এই জেলা প্রতিষ্ঠা লাভ করে, পূর্বে এটি ঢাকা জেলার অন্তর্ভুক্ত
              ছিল। রাজধানী ঢাকার নিকটবর্তী একটি শহর এবং নারায়ণগঞ্জ জেলার
              সদরদপ্তর।
            </p>
          </div>

          <div className="mt-6">
            <Link
              to="#"
              className="inline-block text-white font-medium hover:underline transition text-sm"
            >
              বিস্তারিত দেখুন →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistricHistory;
