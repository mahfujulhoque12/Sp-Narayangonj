import { FaRegFileAlt, FaRegFileExcel } from "react-icons/fa";
import { LuFileCheck, LuFileClock } from "react-icons/lu";
import NocCard from "./NocCard";

const NOCComponent = () => {
  return (
    <div>
      {/* top part start  */}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">এনওসি ড্যাশবোর্ড</h1>
          <p className="para-2 mt-3">অনাপত্তি সনদ (NOC) আবেদন</p>
        </div>
      </div>
      {/* top part end  */}

      {/* card start  */}
      <div className="wrapper mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* 1st card start  */}
        <div className="p-5 rounded-xl border border-gray-200 shadow-md">
          <div className="flex justify-between items-center ">
            <button className="text-blue-500 bg-blue-100 p-2 rounded-lg">
              <FaRegFileAlt size={20} />
            </button>
            <p className="para-3">9</p>
          </div>

          <p className="para-1 mt-3 text-gray-700!">মোট আবেদন</p>
        </div>
        {/* 1st card end  */}

        {/*2nd card start  */}
        <div className="p-5 rounded-xl border border-gray-200 shadow-md">
          <div className="flex justify-between items-center ">
            <button className="text-yellow-500 bg-yellow-100 p-2 rounded-lg">
              <LuFileClock size={20} />
            </button>
            <p className="para-3 text-yellow-600!">9</p>
          </div>

          <p className="para-1 mt-3 text-gray-700!">পর্যালোচনাধীন</p>
        </div>
        {/*2nd card end  */}
        {/*3rd card start  */}
        <div className="p-5 rounded-xl border border-gray-200 shadow-md">
          <div className="flex justify-between items-center ">
            <button className="text-green-500 bg-green-100 p-2 rounded-lg">
              <LuFileCheck size={20} />
            </button>
            <p className="para-3 text-green-600!">9</p>
          </div>

          <p className="para-1 mt-3 text-gray-700!">অনুমোদিত</p>
        </div>
        {/*3rd card end  */}
        {/* 4th card start  */}
        <div className="p-5 rounded-xl border border-gray-200 shadow-md">
          <div className="flex justify-between items-center ">
            <button className="text-red-500 bg-red-100 p-2 rounded-lg">
              <FaRegFileExcel size={20} />
            </button>
            <p className="para-3 text-red-600!">9</p>
          </div>

          <p className="para-1 mt-3 text-gray-700!">বাতিল</p>
        </div>
        {/* 4th card end  */}
      </div>
      {/* card end  */}

      <NocCard />
    </div>
  );
};

export default NOCComponent;
