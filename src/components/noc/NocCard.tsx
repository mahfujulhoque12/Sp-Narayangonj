import { mockData } from "./../../../data/data";
import { useState } from "react";
import { FaSearch, FaThLarge, FaList } from "react-icons/fa";
import GridView from "./GridView";
import RowView from "./RowView";

const NocCard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "row">("row");

  return (
    <div className="wrapper mt-8 space-y-6 mb-10">
      {/* Top Filter Bar */}
      <div className="flex  items-center justify-between gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200">
        {/* Tabs */}
        {/* Search */}
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg w-[30%]">
          <FaSearch className="text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="বিপি নং বা নিবন্ধিত নাম দিবেন..."
            className="bg-transparent w-full outline-none text-sm"
          />
        </div>

        {/*  Actions */}
        <div className="flex items-center gap-3">
          {/* View Toggle start*/}

          <button
            onClick={() => setViewMode("row")}
            className={`p-2 rounded-lg ${
              viewMode === "row"
                ? "bg-brand text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <FaList />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg ${
              viewMode === "grid"
                ? "bg-brand text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <FaThLarge />
          </button>
          {/* View toggle end */}
        </div>
      </div>

      {/* Cards */}
      {/* View Render */}
      {viewMode === "grid" ? (
        <GridView data={mockData} />
      ) : (
        <RowView data={mockData} />
      )}
    </div>
  );
};

export default NocCard;
