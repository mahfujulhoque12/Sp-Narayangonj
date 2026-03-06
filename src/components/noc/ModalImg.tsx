import { useState } from "react";
import {
  FaDownload,
  FaShareAlt,
  FaTimes,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

interface ModalProps {
  closeModal: () => void;
  selectedImage: string;
}

const ModalImg: React.FC<ModalProps> = ({ closeModal, selectedImage }) => {
  const [zoom, setZoom] = useState(1);

  // Share menu state
  const [showShare, setShowShare] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer);
    setShowShare(true);
  };

  const handleMouseLeave = () => {
    const t = setTimeout(() => {
      setShowShare(false);
    }, 1000); // 2 seconds
    setTimer(t);
  };

  const handleWheel = (e: React.WheelEvent<HTMLImageElement>) => {
    e.preventDefault();
    const zoomStep = 0.1;
    const minZoom = 1;
    const maxZoom = 4;

    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + zoomStep, maxZoom));
    } else {
      setZoom((prev) => Math.max(prev - zoomStep, minZoom));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-[90%] h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-xl cursor-pointer z-10"
        >
          <FaTimes />
        </button>

        {/* Image */}
        <img
          src={selectedImage}
          alt="Preview"
          onWheel={handleWheel}
          style={{
            transform: `scale(${zoom})`,
            transition: "transform 0.15s ease",
          }}
          className="max-h-[90vh] w-full object-contain rounded-lg bg-white"
        />

        {/* Buttons */}
        <div className="flex justify-end items-center gap-3 absolute bottom-7 right-6">
          {/* Share button with menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-2 cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
              <FaShareAlt className="text-sm" />
              শেয়ার
            </button>

            {showShare && (
              <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-lg p-2 flex gap-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(selectedImage)}`}
                  target="_blank"
                  className="p-2 bg-green-500 text-white rounded hover:scale-105"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(selectedImage)}`}
                  target="_blank"
                  className="p-2 bg-blue-600 text-white rounded hover:scale-105"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(selectedImage)}`}
                  target="_blank"
                  className="p-2 bg-black text-white rounded hover:scale-105"
                >
                  <FaTwitter />
                </a>
              </div>
            )}
          </div>

          {/* Download button */}
          <button className="flex items-center gap-2 cursor-pointer bg-brand text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
            <FaDownload className="text-sm" />
            <a href={selectedImage} download>
              ডাউনলোড
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalImg;
