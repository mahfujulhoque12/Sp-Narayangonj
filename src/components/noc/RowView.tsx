/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaEye, FaDownload } from "react-icons/fa";

interface RowViewProps {
  data: any[];
  statusConfig: any;
}

const RowView = ({ data, statusConfig }: RowViewProps) => {
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr className="text-left">
            <th className="px-6 py-4">ভিপি নং</th>
            <th className="px-6 py-4">আবেদনকারী</th>
            <th className="px-6 py-4">ধরন</th>
            <th className="px-6 py-4">তারিখ</th>
            <th className="px-6 py-4">অবস্থা</th>
            <th className="px-6 py-4 text-right">পদক্ষেপ</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            const config = statusConfig[item.status];

            return (
              <tr
                key={item.id}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-500">{item.id}</td>

                <td className="px-6 py-4 font-medium">{item.name}</td>

                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {item.type}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-500">{item.date}</td>

                <td className="px-6 py-4">
                  <div
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${config.color}`}
                  >
                    {config.icon}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4 text-gray-500">
                    <button className="hover:text-brand">
                      <FaEye />
                    </button>
                    <button className="hover:text-brand">
                      <FaDownload />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RowView;
