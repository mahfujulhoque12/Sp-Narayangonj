type NavItem = {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
};

export const navItems: NavItem[] = [
  { label: "হোম", path: "/" },

  {
    label: "পুলিশ সম্পর্কিত",
    path: "/ameder-khota",
    children: [
      {
        label: "আমাদের কথা",
        path: "/ameder-khota",
      },
      {
        label: "ভৌগলিক পরিচিতি ও জেলার ম্যাপ",
        path: "/vowgolik",
      },
      {
        label: "জেলার কেপিআই সমূহ",
        path: "/kpi",
      },
      {
        label: "জেলা পুলিশের সাংগঠনিক কাঠামো",
        path: "/kathamo",
      },
      {
        label: "পুলিশ লাইন্স সম্পর্কিত তথ্য",
        path: "/police-lines",
      },
      {
        label: "কর্মসম্পাদন",
        path: "/kormosompadon",
      },
    ],
  },
  {
    label: "প্রশাসন",
    path: "/police-lines",
  },
  {
    label: "কার্যক্রম",
    path: "/khobor",
  },
  {
    label: "সেবাসমূহ",
    path: "/a",
    children: [
      {
        label: "পুলিশ ক্লিয়ারেন্স",
        path: "/police-clerence",
      },
      {
        label: "চাকুরির ভেরিফিকেশন",
        path: "/job-varifacition",
      },
      {
        label: "পাসপোর্ট ভেরিফিকেশন",
        path: "/passport-varifacition",
      },
      {
        label: "উইমেন্স সাপোর্ট সেন্টার",
        path: "/womens-support-center",
      },
      {
        label: "ইভেন্ট ম্যানেজমেন্ট",
        path: "/event-management",
      },
      {
        label: "হারানো ও প্রাপ্তি",
        path: "/lost-and-found",
      },
      {
        label: "নিখোঁজ ব্যক্তি সংক্রান্ত তথ্য",
        path: "/nikhoj-bekti",
      },
      {
        label: "অসনাক্তকৃত মৃতদেহ",
        path: "/osonaktokrito-mritodeho",
      },
      {
        label: "জাতীয় গুরুত্বপূর্ণ অনুষ্ঠান সমূহ",
        path: "/national-important-event",
      },
    ],
  },
  {
    label: "অপরাধ ব্যবস্থাপনা",
    path: "/oporad",
  },
  {
    label: "অর্জন",
    path: "/orjon",
  },
  {
    label: "গ্যালারী",
    path: "/gallery",
  },

  { label: "এনওসি", path: "/noc" },
  { label: "যোগাযোগ", path: "/contact" },
];
