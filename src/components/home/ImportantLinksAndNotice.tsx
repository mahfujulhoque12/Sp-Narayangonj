import { Link } from "react-router";
import NoticeBoard from "./NoticeBoard";

const ImportantLinksAndNotice = () => {
  return (
    <div className="wrapper mb-10 flex flex-col sm:flex-row gap-5">
      <div className="w-full sm:w-[28%] bg-white shadow-sm  rounded-xl hover:shadow-xl transition-all duration-300">
        <div className="   bg-brand rounded-t-xl py-5">
          <h3 className="head-1 text-center! border-b-gray-300 text-white!">
            জাতীয় সেবা লিংক
          </h3>
        </div>
        <div className="flex flex-col px-5  pt-5 pb-2 gap-3">
          <Link
            to="https://moha.gov.bd/"
            className="para-5 link-style"
            target="_blank"
          >
            স্বরাষ্ট্র মন্ত্রণালয়
          </Link>
          <Link
            to="https://bangladesh.gov.bd/index.php"
            className="para-5 link-style"
            target="_blank"
          >
            বাংলাদেশ জাতীয় প্রবেশদ্বার
          </Link>
          <Link
            to="https://www.eprocure.gov.bd"
            className="para-5 link-style"
            target="_blank"
          >
            জাতীয় ই-গভর্নমেন্ট প্রকিউরমেন্ট
          </Link>

          <Link
            to="https://www.theiacp.org/"
            className="para-5 link-style"
            target="_blank"
          >
            আইএসিপি
          </Link>

          <Link
            to="https://pcc.police.gov.bd/en"
            className="para-5 link-style"
            target="_blank"
          >
            অনলাইন পুলিশ ক্লিয়ারেন্স
          </Link>
        </div>
        <div className="flex justify-center mt-1 px-5 pb-3">
          <Link
            to={""}
            className="hover:text-yellow-500 transition-all duration-300 text-sm flex items-center gap-1"
          >
            আরও দেখুন
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-[44%]">
        <NoticeBoard />
      </div>
      <div className="w-full sm:w-[28%] bg-white shadow-sm  rounded-xl hover:shadow-xl transition-all duration-300">
        <div className="   bg-brand rounded-t-xl py-5">
          <h3 className="head-1 text-center! border-b-gray-300 text-white!">
            আন্তর্জাতিক সেবা লিংক
          </h3>
        </div>
        <div className="flex flex-col px-5  pt-5 pb-2 gap-3">
          <Link
            to="https://www.eprocure.gov.bd"
            className="para-5 link-style"
            target="_blank"
          >
            জাতীয় ই-গভর্নমেন্ট প্রকিউরমেন্ট
          </Link>
          <Link
            to="https://www.interpol.int"
            className="para-5 link-style"
            target="_blank"
          >
            ইন্টারপোল
          </Link>
          <Link
            to="https://www.un.org/en"
            className="para-5 link-style"
            target="_blank"
          >
            জাতিসংঘ
          </Link>
          <Link
            to="https://www.theiacp.org/"
            className="para-5 link-style"
            target="_blank"
          >
            আইএসিপি
          </Link>

          <Link
            to="https://pcc.police.gov.bd/en"
            className="para-5 link-style"
            target="_blank"
          >
            অনলাইন পুলিশ ক্লিয়ারেন্স
          </Link>
        </div>

        <div className="flex justify-center mt-1 px-5 pb-3">
          <Link
            to={""}
            className="hover:text-yellow-500 transition-all duration-300 text-sm flex items-center gap-1"
          >
            আরও দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportantLinksAndNotice;
