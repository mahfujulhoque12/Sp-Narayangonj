import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import OfficeProdan from "./OfficeProdan";
import Kormokortagon from "./Kormokortagon";
import Kormochari from "./Kormochari";
import ExOfficeProdan from "./ExOfficeProdan";

const Amra = () => {
  const tabs = [
    "অফিস প্রধান",
    "কর্মকর্তাগণ",
    "কর্মচারীবৃন্দ",
    "প্রাক্তন আফিস প্রধানগণ",
  ];
  const [activeTab, setActiveTab] = useState("অফিস প্রধান");
  return (
    <div className="my-10 wrapper">
      <div className="flex justify-center items-center mb-10">
        <span className="text-brand text-center text-sm bg-brand/10 px-4 py-2 rounded-full flex items-center gap-2">
          <LuUsers />
          আমরা
        </span>
      </div>
      {/* Top Filter Bar */}
      <div className="flex  flex-wrap items-center justify-between gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200">
        {/* Tabs */}
        <div className="flex gap-2 flex-wrap bg-gray-100 rounded-lg p-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
                        ${
                          activeTab === tab
                            ? "bg-brand text-white shadow"
                            : "bg-gray-50 text-gray-700 hover:bg-brand/10 hover:text-brand"
                        }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search + Actions */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="অনুসন্ধান করুন..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          {/* View Toggle start*/}

          {/* View toggle end */}
        </div>
      </div>{" "}
      {/* Top Filter Bar end */}
      <div className="my-7">
        {activeTab === "অফিস প্রধান" && <OfficeProdan />}
        {activeTab === "কর্মকর্তাগণ" && <Kormokortagon />}
        {activeTab === "কর্মচারীবৃন্দ" && <Kormochari />}
        {activeTab === "প্রাক্তন আফিস প্রধানগণ" && <ExOfficeProdan />}
      </div>
    </div>
  );
};

export default Amra;
