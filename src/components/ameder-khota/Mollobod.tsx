import { CgMenuRound } from "react-icons/cg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoStarOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

const values = [
  {
    id: 1,
    title: "শৃঙ্খলা",
    description: "আইন ও নিয়ম মেনে সুশৃঙ্খল সমাজ গড়ে তোলা।",
    icon: IoStarOutline,
  },
  {
    id: 2,
    title: "নিরাপত্তা",
    description: "জনগণের জানমাল রক্ষা এবং নিরাপদ পরিবেশ নিশ্চিত করা।",
    icon: HiOutlineBadgeCheck,
  },
  {
    id: 3,
    title: "প্রগতি",
    description:
      "আধুনিক প্রযুক্তি ও দক্ষতার মাধ্যমে উন্নত পুলিশিং নিশ্চিত করা।",
    icon: CgMenuRound,
  },
  {
    id: 4,
    title: "জবাবদিহিতা",
    description: "আমাদের কাজ ও সিদ্ধান্তের জন্য জনগণের কাছে দায়বদ্ধ থাকা।",
    icon: LuUsers,
  },
];

const Mollobod = () => {
  return (
    <div className="mt-20 wrapper">
      <div className="flex justify-center items-center">
        <span className="text-brand text-center text-sm bg-brand/10 px-4 py-2 rounded-full">
          মূল মূল্যবোধ
        </span>
      </div>

      {/* card start */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {values.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="bg-white h-full hover:shadow-xl transition-all duration-300 rounded-xl px-5 py-8 flex flex-col items-center text-center shadow"
          >
            <div className="p-2 rounded-full bg-brand/10 text-brand mb-4">
              <Icon size={20} />
            </div>

            <p className="head-2 mb-2">{title}</p>

            {/* Push description to take equal space */}
            <p className="para-1 text-gray-600!">{description}</p>
          </div>
        ))}
      </div>
      {/* card end */}
    </div>
  );
};

export default Mollobod;
