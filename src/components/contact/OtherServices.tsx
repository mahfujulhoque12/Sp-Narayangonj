import {
  FaUserShield,
  FaIdCard,
  FaFileAlt,
  FaPassport,
  FaCarCrash,
  FaExclamationTriangle,
  FaSearch,
  FaGavel,
  FaPhoneAlt,
  FaUsers,
  FaClipboardList,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUserTie,
  FaHandHoldingHeart,
  FaDatabase,
} from "react-icons/fa";

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  { id: 1, title: "অনলাইন জিডি", icon: <FaFileAlt size={22} /> },
  { id: 2, title: "পাসপোর্ট ভেরিফিকেশন", icon: <FaPassport size={22} /> },
  { id: 3, title: "পুলিশ ক্লিয়ারেন্স", icon: <FaIdCard size={22} /> },
  { id: 4, title: "ট্রাফিক সেবা", icon: <FaCarCrash size={22} /> },
  { id: 5, title: "অভিযোগ দাখিল", icon: <FaExclamationTriangle size={22} /> },
  { id: 6, title: "নিখোঁজ ব্যক্তি অনুসন্ধান", icon: <FaSearch size={22} /> },
  { id: 7, title: "মামলার তথ্য", icon: <FaGavel size={22} /> },
  { id: 8, title: "জরুরি যোগাযোগ", icon: <FaPhoneAlt size={22} /> },
  { id: 9, title: "কমিউনিটি পুলিশিং", icon: <FaUsers size={22} /> },
  { id: 10, title: "ডিউটি অফিসার তালিকা", icon: <FaClipboardList size={22} /> },
  { id: 11, title: "থানা সমূহ", icon: <FaMapMarkedAlt size={22} /> },
  { id: 12, title: "সাইবার নিরাপত্তা", icon: <FaShieldAlt size={22} /> },
  { id: 13, title: "পুলিশ সুপারের বার্তা", icon: <FaUserTie size={22} /> },
  { id: 14, title: "মানবিক সহায়তা", icon: <FaHandHoldingHeart size={22} /> },
  { id: 15, title: "অপরাধ পরিসংখ্যান", icon: <FaDatabase size={22} /> },
  { id: 16, title: "আইনশৃঙ্খলা পরিস্থিতি", icon: <FaUserShield size={22} /> },
  { id: 3, title: "পুলিশ ক্লিয়ারেন্স", icon: <FaIdCard size={22} /> },
  { id: 4, title: "ট্রাফিক সেবা", icon: <FaCarCrash size={22} /> },
];

const OtherServices = () => {
  return (
    <div className="wrapper pb-15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white shadow-sm p-5 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer group"
        >
          <div className="flex justify-center items-center">
            <div className="bg-[#1E3A5F1A] p-3 rounded-xl group-hover:bg-[#1E3A5F] transition-all duration-300">
              <div className="text-[#1E3A5F] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
            </div>
          </div>

          <p className="para-4 text-center mt-3 text-gray-800">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OtherServices;
