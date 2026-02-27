import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { TbBadgeFilled } from "react-icons/tb";
import { Link } from "react-router";

const FooterBottom = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-15">
      {/* 1st card  */}
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-500 p-2 rounded-full">
            <TbBadgeFilled size={25} />
          </div>
          <div>
            <h2 className="head-2 text-white! font-semibold!">জেলা পুলিশ</h2>
            <p className="para-1 text-yellow-500!"> নারায়ণগঞ্জ</p>
          </div>
        </div>

        <p className="para-6 mt-5">
          নারায়ণগঞ্জ জেলা পুলিশ জনগণের সেবায় নিবেদিত। নিরাপদ ও শান্তিপূর্ণ
          সমাজ গঠনই আমাদের অঙ্গীকার।
        </p>
      </div>

      {/* 1st card  end*/}
      {/* card 2 start  */}
      <div>
        <h3 className="head-5 pb-5">গুরুত্বপূর্ণ লিংক</h3>

        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          <LuExternalLink />
          বাংলাদেশ পুলিশ
        </Link>
        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          <LuExternalLink />
          পুলিশ সদর দপ্তর
        </Link>
        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          <LuExternalLink />
          ডিজিটাল নিরাপত্তা আইন
        </Link>
        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          <LuExternalLink />
          স্বরাষ্ট্র মন্ত্রণালয়
        </Link>
      </div>

      {/* card 2 end  */}
      {/* card 3 start  */}
      <div>
        <h3 className="head-5 pb-5">সাইট নেভিগেশন</h3>

        <Link
          to={"/ameder-khota"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          আমাদের সম্পর্কে
        </Link>
        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          সেবাসমূহ
        </Link>
        <Link
          to={"/noc"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          এনওসি
        </Link>
        <Link
          to={"/khobor"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          খবর
        </Link>
        <Link
          to={"/contact"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          যোগাযোগ
        </Link>
      </div>

      {/* card 3 end  */}
      {/* card 4 start  */}
      <div>
        <h3 className="head-5 pb-5">যোগাযোগ</h3>

        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          <FaMapMarkerAlt className="text-yellow-500" />
          পুলিশ সুপার কার্যালয়, নারায়ণগঞ্জ, বাংলাদেশ
        </Link>
        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          <IoCallSharp className="text-yellow-500" />
          +৮৮০ ২-৭৬৪৮২২২
        </Link>
        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 hover:text-yellow-500! transition-all duration-300 mb-2"
        >
          <MdOutlineEmail className="text-yellow-500" />
          spnarayanganj@police.gov.bd
        </Link>

        <Link
          to={"#"}
          className="para-6 flex items-center gap-2 text-red-200! transition-all duration-300 mb-2 bg-red-500/20 mt-4 py-4 px-3 rounded-lg hover:bg-red-500 border border-red-500 hover:text-white!"
        >
          <IoCallSharp />
          জরুরি সেবা: ৯৯৯
        </Link>
      </div>

      {/* card 4 end  */}
    </div>
  );
};

export default FooterBottom;
