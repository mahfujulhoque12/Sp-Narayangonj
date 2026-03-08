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
    label: "সেবা",
    path: "/a",
    children: [
      {
        label: "test",
        path: "2",
      },
    ],
  },
  {
    label: "অপরাধ ব্যবস্থাপনা",
    path: "/b",
  },
  {
    label: "অর্জন",
    path: "/c",
  },
  {
    label: "গ্যালারী",
    path: "/ddd",
  },

  { label: "এনওসি", path: "/noc" },
  { label: "যোগাযোগ", path: "/contact" },
];
