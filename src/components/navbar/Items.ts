type NavItem = {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
};

export const navItems: NavItem[] = [
  { label: "হোম", path: "/" },

  {
    label: "আমাদের কথা",
    path: "/ameder-khota",
  },

  {
    label: "সেবাসমূহ",
    children: [
      { label: "সেবার তালিকা", path: "#" },

      { label: "কি সেবা কিভাবে পাবেন", path: "#" },
      { label: "সিটিজেন চার্টার", path: "#" },
    ],
  },
  {
    label: "পুলিশ লাইন্স",
    children: [
      { label: "থানা", path: "#" },

      { label: "ফাঁড়ি", path: "#" },
      { label: "তদন্ত কেন্দ্র", path: "#" },
      { label: "অফিসসমূহ", path: "#" },
    ],
  },
  {
    label: "খবর",
    children: [
      { label: "অভিযান", path: "#" },

      { label: "আটক-উদ্ধার", path: "#" },
      { label: "প্রেস ব্রিফিং", path: "#" },
      { label: "বিজ্ঞপ্তি", path: "#" },
      { label: "সফলতা", path: "#" },
    ],
  },
  {
    label: "অন্যান্য বিভাগ",
    children: [
      { label: "ডি বি", path: "#" },

      { label: "ডি এস বি", path: "#" },
      { label: "সার্কেল", path: "#" },
      { label: "সি আই ডি", path: "#" },
      { label: "সিটি এস বি", path: "#" },
    ],
  },

  { label: "এনওসি", path: "/noc" },
];
