import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router";

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
}

const NoticeBoard: React.FC = () => {
  const notices: Notice[] = [
    {
      id: 1,
      title: "গণবিজ্ঞপ্তি",
      date: "২৮ ফেব্রুয়ারি ২০২৬",
      description:
        "সম্মানিত নারায়ণগঞ্জ জেলার সকল নাগরিকের অবগতির জন্য জানানো যাচ্ছে যে, আইন-শৃঙ্খলা পরিস্থিতি স্বাভাবিক ও নিয়ন্ত্রণে রয়েছে। যেকোনো প্রকার গুজব বা ভুয়া তথ্য প্রচার থেকে বিরত থাকার জন্য অনুরোধ করা হলো। জরুরি প্রয়োজনে নিকটস্থ থানায় যোগাযোগ করুন অথবা ৯৯৯ নম্বরে কল করুন।",
    },
    {
      id: 2,
      title: "ট্রাফিক নির্দেশনা",
      date: "২৫ ফেব্রুয়ারি ২০২৬",
      description:
        "আগামী ১ মার্চ বিশেষ কর্মসূচির কারণে শহরের প্রধান সড়কসমূহে সাময়িক যান চলাচল নিয়ন্ত্রণ করা হবে। নাগরিকদের বিকল্প সড়ক ব্যবহার করার জন্য অনুরোধ করা যাচ্ছে। ট্রাফিক পুলিশের নির্দেশনা মেনে চলুন।",
    },
    {
      id: 3,
      title: "সচেতনতামূলক বার্তা",
      date: "২০ ফেব্রুয়ারি ২০২৬",
      description:
        "অনলাইনে প্রতারণা ও সাইবার অপরাধ বৃদ্ধি পাওয়ায় সকলকে সতর্ক থাকার জন্য অনুরোধ করা হচ্ছে। অপরিচিত লিংকে ক্লিক করা বা ব্যক্তিগত তথ্য শেয়ার করা থেকে বিরত থাকুন। সন্দেহজনক কিছু দেখলে দ্রুত থানায় জানান।",
    },
    {
      id: 4,
      title: "নিয়োগ বিজ্ঞপ্তি",
      date: "১৫ ফেব্রুয়ারি ২০২৬",
      description:
        "নারায়ণগঞ্জ জেলা পুলিশের অস্থায়ী কর্মী নিয়োগের আবেদনপত্র আগামী ১০ মার্চ ২০২৬ পর্যন্ত গ্রহণ করা হবে। আগ্রহী প্রার্থীদের নির্ধারিত ফরম পূরণ করে জেলা পুলিশ কার্যালয়ে জমা দেওয়ার জন্য অনুরোধ করা হলো।",
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay?.play();
    }
  }, [emblaApi]);

  return (
    <section className="">
      <div className=" bg-white shadow-lg rounded-xl p-5">
        {/* Header */}
        <div className="border-b border-b-gray-300 pb-4 mb-6">
          <h2 className="head-4   text-brand!">নোটিশ বোর্ড</h2>
        </div>

        <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="embla__container flex">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="embla__slide min-w-0 flex-[0_0_100%] p-2"
              >
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
                  <div className="mt-3 flex justify-end">
                    <Link
                      to="#"
                      className="inline-block text-black font-medium hover:underline transition text-sm"
                    >
                      আরও পড়ুন →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
