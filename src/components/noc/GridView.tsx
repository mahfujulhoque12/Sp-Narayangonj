import { useState } from "react";
import { FaEye, FaDownload } from "react-icons/fa";
import ModalImg from "./ModalImg";

interface GridItem {
  id: string;
  name: string;
  date: string;
  image: string;
}

interface GridViewProps {
  data: GridItem[];
}

const GridView = ({ data }: GridViewProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow hover:shadow-xl transition-all duration-300 rounded-2xl p-5 flex flex-col justify-between border border-gray-200"
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
              <button
                onClick={() => setSelectedImage(item.image)}
                className="flex items-center gap-2 hover:text-brand transition cursor-pointer"
              >
                <FaEye /> দেখুন
              </button>

              <a
                href={item.image}
                download
                className="flex items-center gap-2 hover:text-brand transition"
              >
                <FaDownload /> ডাউনলোড
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <ModalImg closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </>
  );
};

export default GridView;
