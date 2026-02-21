import { useState } from "react";
import Marquee from "react-fast-marquee";

const newsData: string[] = [
  "০৬ (ছয়) কেজি গাঁজা সহ ০১(এক) আসামী গ্রেফাতার",
  "০৭(সাত) কেজি গাজা সহ দুইজন আসামীর গ্রেফতার",
  "পরকিয়ার জেরে স্বামী কর্তৃক স্ত্রী হত্যা মামলার মূল রহস্য উদ্ঘাটন, জড়িত আসামীদের গ্রেফতার ও হত্যাকান্ডে ব্যবহৃত গাড়ী উদ্ধার",
];

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-brand py-3 overflow-hidden z-0">
      <Marquee pauseOnHover speed={60} gradient={false}>
        <div className="flex items-center gap-12 px-4">
          {newsData.map((item, index) => (
            <p
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`cursor-pointer whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
                activeIndex === index ? "text-green-600" : "text-white"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BottomNav;
