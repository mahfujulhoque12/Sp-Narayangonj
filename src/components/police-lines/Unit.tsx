import {
  FaSearch,
  FaCar,
  FaBolt,
  FaNetworkWired,
  FaMicroscope,
} from "react-icons/fa";
import { TbBadgeFilled } from "react-icons/tb";

const Unit = () => {
  const units = [
    {
      id: 1,
      icon: <TbBadgeFilled />, // Badge fits for head circle
      title: "সদর সার্কেল",
      description: "নারায়ণগঞ্জ সদর থানা ও আশপাশের এলাকা",
    },
    {
      id: 2,
      icon: <FaSearch />, // Investigation & intelligence
      title: "গোয়েন্দা শাখা",
      description: "অপরাধ তদন্ত ও গোয়েন্দা কার্যক্রম",
    },
    {
      id: 3,
      icon: <FaCar />, // Traffic & vehicles
      title: "ট্রাফিক বিভাগ",
      description: "সড়ক যানবাহন নিয়ন্ত্রণ ও ট্রাফিক ব্যবস্থাপনা",
    },
    {
      id: 4,
      icon: <FaBolt />, // Rapid action for RAB unit
      title: "র‍্যাব ইউনিট",
      description: "দ্রুত পদক্ষেপ ব্যাটালিয়ন",
    },
    {
      id: 5,
      icon: <FaNetworkWired />, // Cyber & networking
      title: "সাইবার ইউনিট",
      description: "সাইবার অপরাধ প্রতিরোধ ও তদন্ত",
    },
    {
      id: 6,
      icon: <FaMicroscope />, // Forensic analysis
      title: "ফরেনসিক ইউনিট",
      description: "আলামত পরীক্ষা ও ফরেনসিক বিশ্লেষণ",
    },
  ];

  return (
    <div className="wrapper mb-15">
      <h2 className="head-4 text-start! text-gray-800!">ইউনিটসমূহ</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {units.map((unit) => (
          <div
            key={unit.id}
            className="bg-white shadow rounded-xl p-6 flex flex-col items-start gap-2 hover:shadow-xl transition"
          >
            <div className="flex gap-2 items-center">
              <p className="bg-gray-100 p-3 rounded-lg text-xl">{unit.icon}</p>
              <h3 className="text-sm font-medium">{unit.title}</h3>
            </div>
            <p className="para-4">{unit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unit;
