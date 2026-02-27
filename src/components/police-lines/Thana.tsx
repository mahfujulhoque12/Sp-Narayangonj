import {
  FaSearch,
  FaCar,
  FaBolt,
  FaNetworkWired,
  FaMicroscope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TbBadgeFilled } from "react-icons/tb";

const Thana = () => {
  const units = [
    {
      id: 1,
      icon: <TbBadgeFilled />, // Badge fits for head circle
      title: "নারায়ণগঞ্জ সদর থানা",
      description: "০২-৭৬৪১২৩৪",
    },
    {
      id: 2,
      icon: <FaSearch />, // Investigation & intelligence
      title: "বন্দর থানা",
      description: "০২-৭৬৫১২৩৪",
    },
    {
      id: 3,
      icon: <FaCar />, // Traffic & vehicles
      title: "সিদ্ধিরগঞ্জ থানা",
      description: "০২-৭৬৬১২৩৪",
    },
    {
      id: 4,
      icon: <FaBolt />, // Rapid action for RAB unit
      title: "রূপগঞ্জ থানা",
      description: "০২-৭৬৭১২৩৪",
    },
    {
      id: 5,
      icon: <FaNetworkWired />, // Cyber & networking
      title: "আড়াইহাজার থানা",
      description: "০২-৭৬৮১২৩৪",
    },
    {
      id: 6,
      icon: <FaMicroscope />, // Forensic analysis
      title: "সোনারগাঁও থানা",
      description: "০২-৭৬৯১২৩৪",
    },
  ];

  return (
    <div className="wrapper mb-15">
      <h2 className="head-4 text-start! text-gray-800!">থানা সমূহ</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {units.map((unit) => (
          <div
            key={unit.id}
            className="bg-white shadow rounded-xl p-6 flex flex-col items-start gap-4 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-2 items-center">
                <p className="bg-brand p-3 rounded-full text-xl text-white">
                  <FaMapMarkerAlt />
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">{unit.title}</h3>
                <p className="para-4 flex items-center gap-1 mt-1">
                  <IoCallOutline />
                  {unit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thana;
