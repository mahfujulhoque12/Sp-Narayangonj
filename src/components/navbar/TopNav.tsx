import { MdLanguage } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="bg-brand py-3">
      <div className="wrapper flex justify-between items-center gap-3">
        <p className="para-1">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>

        {/* right part  */}

        <button className="text-white text-sm font-medium rounded-full px-3 py-1.5 border border-brand cursor-pointer flex items-center gap-2 ">
          <MdLanguage size={18} />
          Ban
        </button>
        {/* right part end  */}
      </div>
    </div>
  );
};

export default TopNav;
