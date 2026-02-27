import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import ContactForm from "./ContactForm";

const ContactPart = () => {
  return (
    <div className="my-15 wrapper grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-brand rounded-xl p-6">
        <h2 className="head-4 text-start! font-medium! flex items-center gap-2 text-yellow-500!">
          <FiMessageSquare />
          ঠিকানা এবং যোগাযোগ
        </h2>

        {/* 1-------- */}
        <div className="mt-9 flex items-center gap-5">
          <button className="p-3 rounded-lg bg-[#FFFFFF]/15 text-yellow-500 border border-yellow-500/20">
            <FaMapMarkerAlt size={20} />
          </button>
          <div>
            <h4 className="head-5 text-white!">কার্যালয়</h4>
            <p className="para-6 mt-2">
              পুলিশ সুপার কার্যালয়, নারায়ণগঞ্জ, বাংলাদেশ
            </p>
          </div>
        </div>
        {/* 1-------- */}

        {/* 1-------- */}
        <div className="mt-9 flex items-start gap-5">
          <button className="p-3 rounded-lg bg-[#FFFFFF]/15 text-yellow-500 border border-yellow-500/20">
            <IoMdCall size={20} />
          </button>
          <div>
            <h4 className="head-5 text-white!">ফোন</h4>
            <p className="para-6 mt-1">+৮৮০ ২-৭৬৪৮২২২</p>
            <p className="para-6 mt-2 text-red-300!">জরুরি সেবা: ৯৯৯</p>
          </div>
        </div>
        {/* 1-------- */}

        {/* 1-------- */}
        <div className="mt-9 flex items-center gap-5">
          <button className="p-3 rounded-lg bg-[#FFFFFF]/15 text-yellow-500 border border-yellow-500/20">
            <IoMailOutline size={20} />
          </button>
          <div>
            <h4 className="head-5 text-white!">ইমেইল</h4>
            <p className="para-6 mt-1">spnarayanganj@police.gov.bd</p>
          </div>
        </div>
        {/* 1-------- */}

        {/* 1-------- */}
        <div className="mt-9 flex items-center gap-5">
          <button className="p-3 rounded-lg bg-[#FFFFFF]/15 text-yellow-500 border border-yellow-500/20">
            <FaRegClock size={20} />
          </button>
          <div>
            <h4 className="head-5 text-white!">অফিস সময়</h4>
            <p className="para-6 mt-1">
              অফিস সময়: রবিবার - বৃহস্পতিবার, সকাল ৯টা - বিকাল ৫টা
            </p>
          </div>
        </div>
        {/* 1-------- */}
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPart;
