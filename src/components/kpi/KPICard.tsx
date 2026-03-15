import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import {
  RiCheckboxCircleLine,
  RiPoliceBadgeLine,
  RiFileList3Line,
  RiShieldCheckLine,
  RiUserSmileLine,
  RiCarLine,
} from "react-icons/ri";

const kpiData = [
  {
    id: 1,
    title: "মামলা নিষ্পত্তির হার",
    value: "87.5%",
    target: "লক্ষ্য: ৯০%",
    trend: "বৃদ্ধি",
    icon: RiFileList3Line,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    id: 2,
    title: "গ্রেফতার সফলতা",
    value: "78%",
    target: "লক্ষ্য: ৮৫%",
    trend: "বৃদ্ধি",
    icon: RiPoliceBadgeLine,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    id: 3,
    title: "অপরাধ হ্রাস",
    value: "65%",
    target: "লক্ষ্য: ৭০%",
    trend: "বৃদ্ধি",
    icon: RiShieldCheckLine,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    id: 4,
    title: "টহল কার্যক্রম",
    value: "120",
    target: "লক্ষ্য: ১৫০",
    trend: "বৃদ্ধি",
    icon: RiCarLine,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: 5,
    title: "অভিযোগ নিষ্পত্তি",
    value: "92%",
    target: "লক্ষ্য: ৯৫%",
    trend: "বৃদ্ধি",
    icon: RiCheckboxCircleLine,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    id: 6,
    title: "সেবা প্রদান",
    value: "88%",
    target: "লক্ষ্য: ৯০%",
    trend: "বৃদ্ধি",
    icon: RiUserSmileLine,
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const KPICard = () => {
  return (
    <>
      <div className="mt-20 wrapper">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {kpiData.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="div-style">
                {/* top */}
                <div className="flex justify-between items-center">
                  <div className={`${item.color} ${item.bg} p-3 rounded-xl`}>
                    <Icon size={28} />
                  </div>

                  <div
                    className={`flex items-center gap-2 text-base font-medium ${item.color}`}
                  >
                    <FaArrowTrendUp />
                    {item.trend}
                  </div>
                </div>

                <p className="para-4 text-lg! mt-5">{item.title}</p>

                <p className="text-[35px] font-bold text-gray-800">
                  {item.value}
                </p>

                <p className="para-4 text-lg!">{item.target}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 wrapper mb-8">
        <div className="div-style">
          <h2 className="head-4 flex items-center gap-2 text-gray-900!  text-start!">
            {" "}
            <MdOutlineWifiTetheringErrorRounded />
            কর্মসম্পাদন সংক্ষিপ্ত বিবরণ
          </h2>

          <p className=" para-7 mt-3">
            নারায়ণগঞ্জ জেলা পুলিশ ২০২৬ সালে উল্লেখযোগ্য অগ্রগতি অর্জন করেছে।
            মামলা নিষ্পত্তির হার বৃদ্ধি, অপরাধ হ্রাস, এবং জনসেবার মান উন্নয়নে
            আমরা ক্রমাগত কাজ করছি। কমিউনিটি পুলিশিং কার্যক্রম জোরদার করা এবং
            জনগণের সাথে ঘনিষ্ঠ সম্পর্ক স্থাপনের মাধ্যমে আমরা একটি নিরাপদ
            নারায়ণগঞ্জ গড়তে প্রতিশ্রুতিবদ্ধ।
          </p>

          <p className=" para-7 mt-3">
            জেলার উত্তরে ঢাকা ও গাজীপুর, দক্ষিণে মুন্সীগঞ্জ ও কুমিল্লা, পূর্বে
            ব্রাহ্মণবাড়িয়া এবং পশ্চিমে ঢাকা জেলা অবস্থিত। ১৯৮৪ সালে
            নারায়ণগঞ্জ জেলা গঠিত হয়।
          </p>
        </div>
      </div>
    </>
  );
};

export default KPICard;
