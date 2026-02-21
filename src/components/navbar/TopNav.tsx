import { Link } from "react-router";

const TopNav = () => {
  return (
    <div className="bg-brand py-3">
      <div className="wrapper flex justify-between items-center gap-3">
        <p className="para-1">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
        <Link to={"#"} className="para-1 text-yellow-500!">
          জরুরী সেবা
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
