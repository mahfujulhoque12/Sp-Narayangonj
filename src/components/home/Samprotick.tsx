import { FaArrowRight, FaRegClock } from "react-icons/fa";

import { Link } from "react-router";
import { KhoborData } from "../../../data/data";

const Samprotick = () => {
  const categoryNames: Record<string, string> = {
    ovijan: "অভিযান",
    kormoshala: "কর্মশালা",
    procharona: "প্রচারনা",
    proshikkhon: "প্রশিক্ষণ",
    onusthan: "অনুষ্ঠান",
  };
  return (
    <div className="wrapper mb-10">
      <div className="flex justify-between items-center gap-5">
        <h2 className="head-4   text-brand!">সাম্প্রতিক</h2>
        <Link
          to={"/khobor"}
          className="para-2 text-yellow-500! flex items-center gap-2"
        >
          আরও পড়ুন <FaArrowRight size={12} />
        </Link>
      </div>

      {/* samprotick  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {KhoborData.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow  flex flex-col hover:shadow-xl transition relative"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-50 object-cover rounded-t-xl"
            />
            <div className="p-4 ">
              <div className="flex justify-between text-[11px] text-gray-500 ">
                <span className="flex absolute right-4 top-4 items-center gap-1 text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-50">
                  {categoryNames[item.category]}
                </span>
              </div>
              <h3 className="head-2 mb-3">
                {item.title.length > 10
                  ? item.title.slice(0, 25) + "…"
                  : item.title}
              </h3>
              <p className="para-4 text-xs!">
                {item.description.slice(0, 48)}...
              </p>

              <span className="flex items-center gap-1 text-xs  px-2 py-1 rounded-full mt-1">
                <FaRegClock />
                {item.date}
              </span>

              <Link
                to="#"
                className="para-4  text-xs! absolute right-5 bottom-3 gap-1 flex items-center  hover:text-yellow-500! transition-all duration-300 mt-3 text-brand!"
              >
                বিস্তারিত <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
        {KhoborData.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            কোন খবর পাওয়া যায়নি
          </p>
        )}
      </div>
    </div>
  );
};

export default Samprotick;
