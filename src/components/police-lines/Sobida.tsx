import {
  FaIdCard,
  FaFileAlt,
  FaPassport,
  FaCarCrash,
  FaExclamationTriangle,
  FaSearch,
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
];

const Sobida = () => {
  return (
    <div className="wrapper mb-15">
      <h2 className="head-4 text-start! text-gray-800!">সুবিধাসমূহ</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
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
    </div>
  );
};

export default Sobida;
