"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FaEye, FaDownload, FaShareAlt, FaTimes } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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

  const handleShare = async (image: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Image Preview",
          url: image,
        });
      } else {
        await navigator.clipboard.writeText(image);
        alert("Image link copied!");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

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

      {/* ✅ Custom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5">
          <div className="relative bg-white rounded-2xl p-5 max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            {/* Zoomable Image */}
            <div className="flex justify-center">
              <Zoom>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="max-h-[70vh] rounded-lg object-contain"
                />
              </Zoom>
            </div>

            {/* Action Buttons Inside Modal */}
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={() => handleShare(selectedImage)}
                className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                <FaShareAlt /> শেয়ার
              </button>

              <a
                href={selectedImage}
                download
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                <FaDownload /> ডাউনলোড
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GridView;
