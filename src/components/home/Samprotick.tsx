import { FaRegClock, FaTag } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
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
          আরও দেখুন <FaArrowRightLong />
        </Link>
      </div>

      {/* samprotick  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {KhoborData.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow  flex flex-col gap-2 hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-50 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="flex justify-between text-[11px] text-gray-500 ">
                <span className="flex items-center gap-1 text-xs bg-[#1E3A5F1A] px-2 py-1 rounded-full">
                  <FaTag />
                  {categoryNames[item.category]}
                </span>
                <span className="flex items-center gap-1 text-xs  px-2 py-1 rounded-full">
                  <FaRegClock />
                  {item.date}
                </span>
              </div>
              <h3 className="head-2 my-3">
                {item.title.length > 10
                  ? item.title.slice(0, 25) + "…"
                  : item.title}
              </h3>
              <p className="para-4">{item.description.slice(0, 40)}...</p>

              <Link
                to="#"
                className="para-4 flex items-center  hover:text-yellow-500! transition-all duration-300 mt-3 text-brand!"
              >
                বিস্তারিত <MdKeyboardArrowRight size={22} />
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
