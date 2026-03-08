import { FaMapMarkerAlt, FaRegBuilding } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import { LuUsers } from "react-icons/lu";

const values = [
  {
    id: 1,
    title: "মোট এলাকা",
    description: "৭৫৯.৫৭ বর্গ কি.মি.",
    icon: FaRegBuilding,
  },
  {
    id: 2,
    title: "জনসংখ্যা",
    description: "৩২ লক্ষ+",
    icon: LuUsers,
  },
  {
    id: 3,
    title: "উপজেলা",
    description: "5",
    icon: FaMapMarkerAlt,
  },
  {
    id: 4,
    title: "পৌরসভা",
    description: "9",
    icon: FiHome,
  },
];

const VowgolikCard = () => {
  return (
    <>
      <div className="mt-20 wrapper">
        {/* card start */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {values.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="bg-white h-full hover:shadow-xl transition-all duration-300 rounded-xl px-5 py-8 flex flex-col items-center text-center shadow"
            >
              <div className="p-2 rounded-full bg-brand/10 text-brand mb-4">
                <Icon size={20} />
              </div>

              <p className="head-2 mb-2">{title}</p>

              {/* Push description to take equal space */}
              <p className="head-3 text-gray-900! ">{description}</p>
            </div>
          ))}
        </div>
        {/* card end */}
      </div>

      <div className="mt-8 wrapper mb-8">
        <div className="div-style">
          <h2 className="head-4 text-gray-900!  text-start!">
            {" "}
            সংক্ষিপ্ত পরিচিতি
          </h2>

          <p className=" para-7 mt-3">
            নারায়ণগঞ্জ জেলা ঢাকা বিভাগের অন্তর্গত একটি জেলা। এটি বাংলাদেশের
            রাজধানী ঢাকা থেকে ১৬ কিলোমিটার দূরে অবস্থিত। শীতলক্ষ্যা নদীর তীরে
            অবস্থিত এই জেলা বাংলাদেশের অন্যতম শিল্পাঞ্চল হিসেবে পরিচিত।
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

export default VowgolikCard;
