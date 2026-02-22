import { mockData } from "./../../../data/data";
import { useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaEye,
  FaDownload,
  FaSearch,
  FaThLarge,
  FaList,
} from "react-icons/fa";

const tabs = ["সকল আবেদন", "অপেক্ষমান", "অনুমোদিত", "বাতিল"];

const statusConfig = {
  approved: {
    label: "অনুমোদিত",
    icon: <FaCheckCircle />,
    color: "text-green-600 bg-green-100",
    border: "border-t-green-500",
  },
  pending: {
    label: "অপেক্ষমান",
    icon: <FaClock />,
    color: "text-yellow-600 bg-yellow-100",
    border: "border-t-yellow-500",
  },
  rejected: {
    label: "বাতিল",
    icon: <FaTimesCircle />,
    color: "text-red-600 bg-red-100",
    border: "border-t-red-500",
  },
};

const NocCard = () => {
  const [activeTab, setActiveTab] = useState("সকল আবেদন");
  const [viewMode, setViewMode] = useState<"grid" | "row">("grid");

  const filteredData =
    activeTab === "সকল আবেদন"
      ? mockData
      : mockData.filter((item) =>
          activeTab === "অনুমোদিত"
            ? item.status === "approved"
            : activeTab === "অপেক্ষমান"
              ? item.status === "pending"
              : item.status === "rejected",
        );

  return (
    <div className="wrapper mt-8 space-y-6 mb-10">
      {/* Top Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200">
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
              placeholder="আবেদন আইডি বা নাম দিয়ে খুঁজুন..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          {/* View Toggle start*/}

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
          {/* View toggle end */}
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => {
          const config = statusConfig[item.status];

          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow border border-gray-200 border-t-4 ${config.border} p-5 flex flex-col justify-between`}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}
                >
                  {config.icon}
                  {config.label}
                </div>
                <span className="text-sm text-gray-400">{item.id}</span>
              </div>

              {/* Body */}
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded">
                  {item.type}
                </span>
                <p className="text-sm text-gray-500">
                  জমা দেওয়া হয়েছে {item.date}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                  <FaEye /> দেখুন
                </button>
                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                  <FaDownload /> ডাউনলোড
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NocCard;
