import { Link } from "react-router";
import NoticeBoard from "./NoticeBoard";
import { FaCircleArrowRight } from "react-icons/fa6";

const ImportantLinksAndNotice = () => {
  return (
    <div className="wrapper mb-10 flex flex-col sm:flex-row gap-5">
      <div className="w-full sm:w-[25%] bg-white shadow-sm p-5 rounded-xl hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col gap-3">
          <h3 className="head-1 border-b  border-b-gray-300 pb-2">
            জাতীয় সেবা লিংক
          </h3>
          <Link to="https://moha.gov.bd/" className="para-5" target="_blank">
            স্বরাষ্ট্র মন্ত্রণালয়
          </Link>
          <Link
            to="https://bangladesh.gov.bd/index.php"
            className="para-5"
            target="_blank"
          >
            বাংলাদেশ জাতীয় প্রবেশদ্বার
          </Link>
          <Link
            to="https://www.eprocure.gov.bd"
            className="para-5"
            target="_blank"
          >
            জাতীয় ই-গভর্নমেন্ট প্রকিউরমেন্ট
          </Link>

          <Link
            to="https://www.theiacp.org/"
            className="para-5"
            target="_blank"
          >
            আইএসিপি
          </Link>

          <Link
            to="https://pcc.police.gov.bd/en"
            className="para-5"
            target="_blank"
          >
            অনলাইন পুলিশ ক্লিয়ারেন্স
          </Link>
        </div>
        <div className="flex justify-end mt-1">
          <Link
            to={""}
            className="hover:text-yellow-500 transition-all duration-300"
          >
            <FaCircleArrowRight size={25} />
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-[50%]">
        <NoticeBoard />
      </div>
      <div className="w-full sm:w-[25%] bg-white shadow-sm p-5 rounded-xl hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col gap-3">
          <h3 className="head-1 border-b  border-b-gray-300 pb-2">
            আন্তর্জাতিক সেবা লিংক
          </h3>
          <Link
            to="https://www.eprocure.gov.bd"
            className="para-5"
            target="_blank"
          >
            জাতীয় ই-গভর্নমেন্ট প্রকিউরমেন্ট
          </Link>
          <Link
            to="https://www.interpol.int"
            className="para-5"
            target="_blank"
          >
            ইন্টারপোল
          </Link>
          <Link to="https://www.un.org/en" className="para-5" target="_blank">
            জাতিসংঘ
          </Link>
          <Link
            to="https://www.theiacp.org/"
            className="para-5"
            target="_blank"
          >
            আইএসিপি
          </Link>

          <Link
            to="https://pcc.police.gov.bd/en"
            className="para-5"
            target="_blank"
          >
            অনলাইন পুলিশ ক্লিয়ারেন্স
          </Link>
        </div>

        <div className="flex justify-end mt-1">
          <Link
            to={""}
            className="hover:text-yellow-500 transition-all duration-300"
          >
            <FaCircleArrowRight size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportantLinksAndNotice;
