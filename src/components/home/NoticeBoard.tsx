import React from "react";

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
}

const NoticeBoard: React.FC = () => {
  const notice: Notice = {
    id: 1,
    title: "গণবিজ্ঞপ্তি",
    date: "২৮ ফেব্রুয়ারি ২০২৬",
    description:
      "সম্মানিত নারায়ণগঞ্জ জেলার সকল নাগরিকের অবগতির জন্য জানানো যাচ্ছে যে, আইন-শৃঙ্খলা পরিস্থিতি স্বাভাবিক ও নিয়ন্ত্রণে রয়েছে। যেকোনো প্রকার গুজব বা ভুয়া তথ্য প্রচার থেকে বিরত থাকার জন্য অনুরোধ করা হলো। জরুরি প্রয়োজনে নিকটস্থ থানায় যোগাযোগ করুন অথবা ৯৯৯ নম্বরে কল করুন।",
  };

  return (
    <section className="">
      <div className=" bg-white shadow-lg rounded-xl p-5">
        {/* Header */}
        <div className="border-b border-b-gray-300 pb-4 mb-6">
          <h2 className="head-4   text-brand!">পুলিশ সুপার, নারায়ণগঞ্জ</h2>
        </div>

        {/* Notice Card */}
        <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-gray-800">
              {notice.title}
            </h3>
            <span className="text-sm text-gray-500">{notice.date}</span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            {notice.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
