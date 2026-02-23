type Status = "approved" | "pending" | "rejected";

interface NocItem {
  id: string;
  name: string;
  type: string;
  date: string;
  status: Status;
}

export const mockData: NocItem[] = [
  {
    id: "NOC-2024-001",
    name: "রহিম উদ্দিন",
    type: "যানবাহন",
    date: "2024-02-10",
    status: "approved",
  },
  {
    id: "NOC-2024-002",
    name: "করিম প্লাজা",
    type: "নির্মাণ",
    date: "2024-02-12",
    status: "pending",
  },
  {
    id: "NOC-2024-003",
    name: "সিটি ইভেন্ট অর্গ",
    type: "ইভেন্ট",
    date: "2024-02-14",
    status: "rejected",
  },
  {
    id: "NOC-2024-004",
    name: "মাহবুব হোসেন",
    type: "যানবাহন",
    date: "2024-02-15",
    status: "approved",
  },
  {
    id: "NOC-2024-005",
    name: "নিউ মার্কেট ট্রেডার্স",
    type: "ব্যবসা",
    date: "2024-02-16",
    status: "pending",
  },
  {
    id: "NOC-2024-006",
    name: "তানভীর এন্টারপ্রাইজ",
    type: "নির্মাণ",
    date: "2024-02-17",
    status: "approved",
  },
  {
    id: "NOC-2024-007",
    name: "আল-আমিন",
    type: "যানবাহন",
    date: "2024-02-18",
    status: "rejected",
  },
  {
    id: "NOC-2024-008",
    name: "সুবর্ণ ইভেন্ট",
    type: "ইভেন্ট",
    date: "2024-02-19",
    status: "pending",
  },
  {
    id: "NOC-2024-009",
    name: "ফারিয়া ইসলাম",
    type: "নির্মাণ",
    date: "2024-02-20",
    status: "approved",
  },
  {
    id: "NOC-2024-010",
    name: "গ্রিন সিটি ডেভেলপার্স",
    type: "নির্মাণ",
    date: "2024-02-21",
    status: "pending",
  },
  {
    id: "NOC-2024-011",
    name: "রুবেল আহমেদ",
    type: "যানবাহন",
    date: "2024-02-22",
    status: "approved",
  },
  {
    id: "NOC-2024-012",
    name: "ড্রিম ইভেন্ট ম্যানেজমেন্ট",
    type: "ইভেন্ট",
    date: "2024-02-23",
    status: "rejected",
  },
];

import img1 from "../public/kormokorta/1.jpg";
import img2 from "../public/kormokorta/2.jpg";
import img3 from "../public/kormokorta/4.jpg";
import img4 from "../public/kormokorta/5.jpg";
import img5 from "../public/kormokorta/6.jpg";
import img6 from "../public/kormokorta/7.jpg";
import img7 from "../public/kormokorta/8.jpg";
import img8 from "../public/kormokorta/9.jpg";
import img9 from "../public/kormokorta/10.jpg";
import img10 from "../public/kormokorta/11.jpg";
import img11 from "../public/kormokorta/12.jpg";
import img12 from "../public/kormokorta/13.jpg";
import img13 from "../public/kormokorta/14.jpg";
import img14 from "../public/kormokorta/15.jpg";
import img15 from "../public/kormokorta/16.jpg";
import img16 from "../public/kormokorta/17.jpg";
import img17 from "../public/kormokorta/3.jpg";

export const kormokortaData = [
  {
    id: 1,
    img: img17,
    name: "মোহাম্মদ মিজানুর রহমান মুন্সী",
    deg: "পুলিশ সুপার, নারায়ণগঞ্জ",
    phone: "০১৩২০০৯০৩০০",
  },
  {
    id: 2,
    img: img1,
    name: "তাসমিন আক্তার, পিপিএম",
    deg: "অতিঃ পুলিশ সুপার (অর্থ ও প্রশাসন) , নারায়ণগঞ্জ",
    phone: "০১৩২০০৯০৩০২",
  },
  {
    id: 3,
    img: img2,
    name: "তারেক আল মেহেদী",
    deg: "অতিরিক্ত পুলিশ সুপার (অপরাধ ও অপারেশন)",
    phone: "০১৩২০০৯৩০৩",
  },
  {
    id: 4,
    img: img3,
    name: "মোঃ ইব্রাহিম হোসেন",
    deg: "অতিরিক্ত পুলিশ সুপার (ডিবি)",
    phone: "০১৩২০০৯০৩০৫",
  },
  {
    id: 19,
    img: img3,
    name: "মোঃ ইব্রাহিম হোসেন",
    deg: "অতিরিক্ত পুলিশ সুপার, প্রসিকিউশন (অতিরিক্ত দায়িত্বে)",
    phone: "০১৩২০০৯০৩০৫",
  },
  {
    id: 5,
    img: img4,
    name: "ইসরাত জাহান, পিপিএম",
    deg: "অতিরিক্ত পুলিশ সুপার (ডিএসবি)",
    phone: "০১৩২০০৯০৩০৪",
  },
  {
    id: 6,
    img: img5,
    name: "মোঃ সোহেল রানা",
    deg: "অতিরিক্ত পুলিশ সুপার (ট্রাফিক)",
    phone: "০১৩২০০৯০৩১৪",
  },
  {
    id: 17,
    img: img6,
    name: "মোঃ হাছিনুজ্জামান",
    deg: "অতিঃ পুলিশ সুপার, (ক সার্কেল)",
    phone: "০১৩২০০৯০৩৪৭",
  },
  {
    id: 7,
    img: img7,
    name: "মোঃ ইমরান আহম্মেদ, পিপিএম (সেবা)",
    deg: "অতিঃ পুলিশ সুপার (বি সার্কেল) ",
    phone: "০১৩২০০৯০৩৫২",
  },
  {
    id: 8,
    img: img8,
    name: "মোঃ মেহেদী ইসলাম",
    deg: "সিনিয়র সহকারী পুলিশ সুপার (গ সার্কেল)",
    phone: "০১৩২০০৯০৩৫৭",
  },
  {
    id: 9,
    img: img9,
    name: "মোঃ তৈয়বুর রহমান",
    deg: "পুলিশ পরিদর্শক (ডিআইও-১)",
    phone: "০১৩২০০৯০৩৬২",
  },
  {
    id: 10,
    img: img10,
    name: "মোহাম্মদ আব্দুল হালিম",
    deg: "পুলিশ পরিদর্শক (অফিসার ইনচার্জ, নারায়ণগঞ্জ সদর মডেল থানা)",
    phone: "০১৩২০০৯০৩৭৭",
  },
  {
    id: 11,
    img: img11,
    name: "মোঃ আব্দুল মান্নান",
    deg: "পুলিশ পরিদর্শক (অফিসার ইনচার্জ, ফতুল্লা মডেল থানা)",
    phone: "০১৩২০০৯০৪০৩",
  },
  {
    id: 12,
    img: img12,
    name: "মহম্মদ আব্দুল বারিক,পিপিএম",
    deg: "পুলিশ পরিদর্শক (অফিসার ইনচার্জ, সিদ্ধিরগঞ্জ থানা)",
    phone: "০১৩২০০৯০৪২৯",
  },
  {
    id: 13,
    img: img13,
    name: "গোলাম মুক্তার আশরাফ উদ্দিন",
    deg: "পুলিশ পরিদর্শক (অফিসার ইনচার্জ, বন্দর থানা)",
    phone: "০১৩২০০৯০৪৫৫",
  },
  {
    id: 14,
    img: img14,
    name: "মোঃ সবজেল হোসেন",
    deg: "পুলিশ পরিদর্শক (অফিসার ইনচার্জ, রূপগঞ্জ থানা)",
    phone: "০১৩২০০৯০৪৮১",
  },
  {
    id: 16,
    img: img15,
    name: "মোঃ মহিববুল্লাহ",
    deg: "পুলিশ পরিদর্শক (অফিসার ইনচার্জ, সোনারগাাঁ থানা)",
    phone: "০১৩২০০৯০৫৩৩",
  },
  {
    id: 18,
    img: img16,
    name: "মোঃ আলাউদ্দিন",
    deg: "পুলিশ পরিদর্শক (অফিসার ইনচার্জ, আড়াইহাজার থানা)",
    phone: "০১৩২০০৯০৫০৭",
  },
];
