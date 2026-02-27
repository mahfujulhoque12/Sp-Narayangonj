import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const FooterTop = () => {
  return (
    <div className="py-15">
      <h1 className="head-4">আপনার নিরাপত্তা আমাদের অগ্রাধিকার</h1>
      <p className="para-1 text-center! mt-3 text-gray-400!">
        যেকোনো জরুরি পরিস্থিতিতে আমাদের সাথে যোগাযোগ করুন।
      </p>
      <div className="flex justify-center flex-col sm:flex-row  items-center pt-10 gap-5">
        <Link
          to="/contact"
          className="flex items-center gap-2 text-base font-normal text-white px-4 py-2 rounded-xl bg-yellow-500 hover:text-brand transition-all duration-300"
        >
          যোগাযোগ করুন <FaArrowRightLong size={17} />
        </Link>
        <Link
          to="/noc"
          className="flex items-center gap-2 text-base font-normal text-white px-4 py-2 rounded-xl  border border-gray-200 hover:bg-yellow-500 hover:text-brand transition-all duration-300"
        >
          এনওসি আবেদন
        </Link>
      </div>
    </div>
  );
};

export default FooterTop;
