import type { IconType } from "react-icons";
import { CgMenuRound } from "react-icons/cg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoStarOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

type ValueItem = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

const values: ValueItem[] = [
  {
    id: 1,
    title: "সততা",
    description: "প্রতিটি কাজে সত্য এবং স্বচ্ছতা বজায় রাখা।",
    icon: IoStarOutline,
  },
  {
    id: 2,
    title: "সেবা",
    description: "জনগণের প্রয়োজনকে সর্বোপরি রাখা।",
    icon: HiOutlineBadgeCheck,
  },
  {
    id: 3,
    title: "পেশাদারিত্ব",
    description: "পুলিশিংয়ে সর্বোচ্চ মান বজায় রাখা।",
    icon: CgMenuRound,
  },
  {
    id: 4,
    title: "জবাবদিহিতা",
    description: "আমাদের কাজ এবং সিদ্ধান্তের দায়িত্ব নেওয়া।",
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
            className="bg-[#F8F9FA] rounded-xl px-5 flex justify-center items-center flex-col py-8"
          >
            <div className="p-2 rounded-full bg-brand/10 text-brand mb-4">
              <Icon size={20} />
            </div>
            <p className="head-2 mb-2">{title}</p>
            <p className="para-1 text-gray-600! text-center">{description}</p>
          </div>
        ))}
      </div>
      {/* card end */}
    </div>
  );
};

export default Mollobod;
