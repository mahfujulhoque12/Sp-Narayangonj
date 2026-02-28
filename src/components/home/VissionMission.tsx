const VissionMission = () => {
  return (
    <section className="wrapper mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Vision */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition">
        <h2 className="head-4   text-brand! text-start! mb-4">ভিশন (Vision)</h2>

        <p className="text-gray-700 leading-relaxed text-justify text-sm">
          নারায়ণগঞ্জ জেলা পুলিশের ভিশন হলো একটি নিরাপদ, শান্তিপূর্ণ ও
          আইনশৃঙ্খলাপূর্ণ সমাজ প্রতিষ্ঠা করা, যেখানে প্রতিটি নাগরিক ভয়মুক্তভাবে
          জীবনযাপন করতে পারে। আধুনিক প্রযুক্তি, স্বচ্ছতা ও জবাবদিহিতার মাধ্যমে
          জনগণের আস্থা অর্জন এবং মানবিক পুলিশিং নিশ্চিত করাই আমাদের লক্ষ্য।
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition">
        <h2 className="head-4   text-brand! text-start! mb-4">
          মিশন (Mission)
        </h2>

        <ul className="text-gray-700 leading-relaxed space-y-3 list-disc pl-5 text-justify text-sm">
          <li>আইনশৃঙ্খলা রক্ষা এবং অপরাধ দমন কার্যক্রম জোরদার করা।</li>
          <li>
            জনগণের সাথে সুসম্পর্ক বজায় রেখে কমিউনিটি পুলিশিং কার্যক্রম
            সম্প্রসারণ করা।
          </li>
          <li>প্রযুক্তিনির্ভর তদন্ত ও সেবা প্রদান নিশ্চিত করা।</li>
          <li>
            মানবাধিকার, ন্যায়বিচার ও পেশাদারিত্বের সর্বোচ্চ মান বজায় রাখা।
          </li>
          <li>
            সন্ত্রাসবাদ, মাদক ও অন্যান্য অপরাধের বিরুদ্ধে কার্যকর ব্যবস্থা
            গ্রহণ।
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VissionMission;
