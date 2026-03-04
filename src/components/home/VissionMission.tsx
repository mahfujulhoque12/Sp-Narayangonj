const VissionMission = () => {
  return (
    <section className="wrapper mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Vision */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition">
        <h2 className="head-4 text-brand! text-start! mb-4">ভিশন</h2>

        <p className="text-gray-700 leading-relaxed text-justify text-sm">
          একটি নিরাপদ, শান্তিপূর্ণ ও আইনশৃঙ্খলাপূর্ণ সমাজ প্রতিষ্ঠা করা, প্রতিটি
          নাগরিকের জন্য ভয়মুক্ত ও নিরাপদ জীবনযাপন নিশ্চিত করা, আধুনিক
          প্রযুক্তিনির্ভর ও স্বচ্ছ পুলিশিং ব্যবস্থা গড়ে তোলা এবং জনগণের আস্থা
          অর্জনের মাধ্যমে মানবিক ও সেবামূলক পুলিশিং নিশ্চিত করা।
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition">
        <h2 className="head-4 text-brand! text-start! mb-4">মিশন</h2>

        <p className="text-gray-700 leading-relaxed text-justify text-sm">
          আইনশৃঙ্খলা রক্ষা ও অপরাধ দমন কার্যক্রম জোরদার করা, জনগণের সাথে
          সুসম্পর্ক বজায় রেখে কমিউনিটি পুলিশিং সম্প্রসারণ করা, প্রযুক্তিনির্ভর
          তদন্ত ও সেবা প্রদান নিশ্চিত করা এবং মানবাধিকার, ন্যায়বিচার ও
          পেশাদারিত্বের সর্বোচ্চ মান বজায় রেখে সন্ত্রাসবাদ, মাদকসহ সকল অপরাধের
          বিরুদ্ধে কার্যকর ব্যবস্থা গ্রহণ করা।
        </p>
      </div>
    </section>
  );
};

export default VissionMission;
