const SBeboron = () => {
  return (
    <div className="wrapper my-15 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* left side start */}
      <div>
        <h2 className="head-4 text-start! text-gray-800!">সংক্ষিপ্ত বিবরণ</h2>
        <p className="para-4 mt-3">
          নারায়ণগঞ্জ পুলিশ লাইন্স হলো জেলার প্রধান পুলিশ সদর দপ্তর। এখানে
          বিভিন্ন ইউনিটের কার্যালয়, প্রশিক্ষণ কেন্দ্র, আবাসিক সুবিধা এবং
          অন্যান্য প্রশাসনিক সুবিধা রয়েছে।
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="p-5 rounded-lg bg-gray-100 shadow hover:shadow-xl transition-all duration-300">
            <h3 className="head-1 text-center">১২</h3>
            <p className="para-4 mt-2 text-center">থানা</p>
          </div>
          <div className="p-5 rounded-lg bg-gray-100 shadow hover:shadow-xl transition-all duration-300">
            <h3 className="head-1 text-center">৫</h3>
            <p className="para-4 mt-2 text-center">উপজেলা</p>
          </div>
          <div className="p-5 rounded-lg bg-gray-100 shadow hover:shadow-xl transition-all duration-300">
            <h3 className="head-1 text-center">২,১৫০+</h3>
            <p className="para-4 mt-2 text-center">জনবল</p>
          </div>
        </div>
      </div>
      {/* left side end */}

      {/* right side  */}
      <div>
        <img src="/police/p.png" alt="" className="rounded-xl" />
      </div>
      {/* right side  end*/}
    </div>
  );
};

export default SBeboron;
