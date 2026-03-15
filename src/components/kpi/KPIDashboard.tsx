type StatItem = {
  label: string;
  value: string | number;
};

type CardData = {
  title: string;
  items: StatItem[];
};

const dashboardData: CardData[] = [
  {
    title: "আইন শৃঙ্খলা",
    items: [
      { label: "মামলা দায়ের", value: "2,450" },
      { label: "মামলা নিষ্পত্তি", value: "2,145" },
      { label: "গ্রেফতার", value: "1,820" },
    ],
  },
  {
    title: "জনসেবা",
    items: [
      { label: "পুলিশ ভেরিফিকেশন", value: "15,240" },
      { label: "এনওসি জারি", value: "3,450" },
      { label: "জিডি দাখিল", value: "8,920" },
    ],
  },
  {
    title: "নিরাপত্তা",
    items: [
      { label: "টহল", value: "24,500" },
      { label: "চেকপোস্ট", value: "125" },
      { label: "ভিআইপি সিকিউরিটি", value: "420" },
    ],
  },
];

const KPIDashboard = () => {
  return (
    <section className="wrapper mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* header */}
            <div className="bg-gradient-to-r from-[#3f5480] to-[#2f446c] text-white px-6 py-4 text-lg font-semibold">
              {card.title}
            </div>

            {/* content */}
            <div className="p-6 space-y-5">
              {card.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-gray-700"
                >
                  <span className="text-base">{item.label}</span>

                  <span className="text-lg font-semibold text-[#2f446c]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KPIDashboard;
