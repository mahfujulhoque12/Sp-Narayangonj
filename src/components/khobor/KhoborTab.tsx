import { useState } from "react";
import { FaRegClock, FaSearch, FaTag } from "react-icons/fa";
import { KhoborData } from "../../../data/data";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

const KhoborTab = () => {
  const tabs = [
    { id: 1, name: "সকল", slug: "all" },
    { id: 2, name: "অভিযান", slug: "ovijan" },
    { id: 3, name: "কর্মশালা", slug: "kormoshala" },
    { id: 4, name: "প্রচারনা", slug: "procharona" },
    { id: 5, name: "প্রশিক্ষণ", slug: "proshikkhon" },
    { id: 6, name: "অনুষ্ঠান", slug: "onusthan" },
  ];

  const categoryNames: Record<string, string> = {
    ovijan: "অভিযান",
    kormoshala: "কর্মশালা",
    procharona: "প্রচারনা",
    proshikkhon: "প্রশিক্ষণ",
    onusthan: "অনুষ্ঠান",
  };

  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered news based on tab and search
  const filteredData = KhoborData.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="wrapper my-15">
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200">
        {/* Tabs */}
        <div className="flex gap-2 flex-wrap bg-gray-100 rounded-lg p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.slug)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
                ${
                  activeTab === tab.slug
                    ? "bg-brand text-white shadow"
                    : "bg-gray-50 text-gray-700 hover:bg-brand/10 hover:text-brand"
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="অনুসন্ধান করুন..."
              className="bg-transparent outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid of Khobor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredData.map((item) => (
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
        {filteredData.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            কোন খবর পাওয়া যায়নি
          </p>
        )}
      </div>
    </div>
  );
};

export default KhoborTab;
