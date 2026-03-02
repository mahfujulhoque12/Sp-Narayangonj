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
  },
  {
    label: "পুলিশ প্রশাসন",
    path: "/police-lines",
  },
  {
    label: "পুলিশী কার্যক্রম",
    path: "/khobor",
  },
  {
    label: "পুলিশী সেবা",
    path: "",
  },
  {
    label: "অপরাধ ব্যবস্থাপনা",
    path: "",
  },
  {
    label: "উল্লেখযোগ্য অর্জন",
    path: "",
  },
  {
    label: "ছবি গ্যালারী",
    path: "",
  },

  { label: "এনওসি", path: "/noc" },
  { label: "যোগাযোগ", path: "/contact" },
];
