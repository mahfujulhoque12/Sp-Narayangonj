/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaEye, FaDownload } from "react-icons/fa";

interface GridViewProps {
  data: any[];
}

const GridView = ({ data }: GridViewProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`bg-white hover:shadow-xl transition-all duration-300 rounded-2xl shadow border border-brand border-t-4  p-5 flex flex-col justify-between`}
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="text-sm text-gray-400">{item.id}</span>
            </div>

            {/* Body */}
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">
                জমা দেওয়া হয়েছে {item.date}
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
              <button className="flex items-center gap-2 hover:text-brand transition">
                <FaEye /> দেখুন
              </button>
              <button className="flex items-center gap-2 hover:text-brand transition">
                <FaDownload /> ডাউনলোড
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
