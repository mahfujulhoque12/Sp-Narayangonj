import { ExOfficeProdanData } from "../../../data/data";
import { FaUserTie } from "react-icons/fa";

const ExOfficeProdan = () => {
  return (
    <div className="wrapper">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ExOfficeProdanData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Top Gradient Strip */}
            <div className="h-2 bg-gradient-to-r from-brand to-indigo-500" />

            <div className="p-6 text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-brand/10 text-brand text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaUserTie />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-brand transition-colors duration-300">
                {item.name}
              </h3>

              {/* Period Badge */}
              <div className="inline-block mt-4 px-4 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExOfficeProdan;
