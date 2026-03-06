import Marquee from "react-fast-marquee";

const unitCart = [
  {
    name: "নারায়ণগঞ্জ সদর থানা",
    incharge: "ওসি মোঃ আব্দুল্লাহ আল মামুন",
    phone: "01711-111111",
  },
  {
    name: "ফতুল্লা থানা",
    incharge: "ওসি মোঃ কামরুল হাসান",
    phone: "01711-222222",
  },
  {
    name: "সিদ্ধিরগঞ্জ থানা",
    incharge: "ওসি মোঃ রফিকুল ইসলাম",
    phone: "01711-333333",
  },
  {
    name: "রূপগঞ্জ থানা",
    incharge: "ওসি মোঃ শহিদুল ইসলাম",
    phone: "01711-444444",
  },
  {
    name: "বন্দর থানা",
    incharge: "ওসি মোঃ মাহবুব আলম",
    phone: "01711-555555",
  },
  {
    name: "ফতুল্লা থানা",
    incharge: "ওসি মোঃ কামরুল হাসান",
    phone: "01711-222222",
  },
  {
    name: "সিদ্ধিরগঞ্জ থানা",
    incharge: "ওসি মোঃ রফিকুল ইসলাম",
    phone: "01711-333333",
  },
];

const PoliceUnit = () => {
  return (
    <section className="wrapper mb-10">
      <h1 className="head-4   text-brand!  mb-5">পুলিশ ইউনিট সমূহ</h1>

      <div className="bg-brand rounded-xl  py-6">
        <Marquee speed={60} pauseOnHover={true}>
          {unitCart.map((data, index) => (
            <div
              key={index}
              className="mx-4 p-5 rounded-xl overflow-hidden shadow-md bg-white"
            >
              <div>
                <h1 className="head-1 text-lg!">{data.name}</h1>
                <h2 className="para-1 text-black! mt-1">
                  {" "}
                  <b> ইনচার্জ :</b> {data.incharge}
                </h2>
                <p className="text-sm font-normal text-gray-700 mt-0.5">
                  {data.phone}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PoliceUnit;
