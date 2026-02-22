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
