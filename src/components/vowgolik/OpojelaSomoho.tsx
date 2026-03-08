type Upazila = {
  name: string;
  area: string;
  population: string;
};

const upazilas: Upazila[] = [
  {
    name: "নারায়ণগঞ্জ সদর",
    area: "৬৭.৮৪ বর্গ কি.মি.",
    population: "৭,২০,০০০",
  },
  {
    name: "বন্দর",
    area: "৬১.৫২ বর্গ কি.মি.",
    population: "৪,৫০,০০০",
  },
  {
    name: "সোনারগাঁও",
    area: "২৫২.৪০ বর্গ কি.মি.",
    population: "৩,৮০,০০০",
  },
  {
    name: "আড়াইহাজার",
    area: "১৮৩.৮৮ বর্গ কি.মি.",
    population: "২,৫০,০০০",
  },
  {
    name: "রূপগঞ্জ",
    area: "২৩৬.০৭ বর্গ কি.মি.",
    population: "৫,২০,০০০",
  },
];

export default function OpojelaSomoho() {
  return (
    <section className="wrapper mb-10">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Title */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="head-4 text-gray-900!  text-start!">উপজেলা সমূহ</h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr className="text-sm text-slate-700">
                <th className="px-6 py-3 font-semibold border-b border-gray-200">
                  উপজেলা
                </th>
                <th className="px-6 py-3 font-semibold border-b border-gray-200">
                  আয়তন
                </th>
                <th className="px-6 py-3 font-semibold border-b border-gray-200">
                  জনসংখ্যা (আনু.)
                </th>
              </tr>
            </thead>

            <tbody>
              {upazilas.map((u, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-slate-800">{u.name}</td>
                  <td className="px-6 py-4 text-slate-700">{u.area}</td>
                  <td className="px-6 py-4 text-slate-700">{u.population}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
