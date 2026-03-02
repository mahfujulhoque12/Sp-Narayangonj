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
