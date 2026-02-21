type NavItem = {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
};

export const navItems: NavItem[] = [
  { label: "হোম", path: "/" },
  { label: "আমাদের সম্পর্কে", path: "/about" },
  {
    label: "সেবাসমূহ",
    children: [
      { label: "অনলাইন সেবা", path: "/services/online" },
      { label: "অফলাইন সেবা", path: "/services/offline" },
    ],
  },
  { label: "পুলিশ লাইন্স", path: "/police-lines" },
  { label: "সংবাদ", path: "/news" },
  { label: "এনওসি", path: "/noc" },
  { label: "যোগাযোগ", path: "/contact" },
];
