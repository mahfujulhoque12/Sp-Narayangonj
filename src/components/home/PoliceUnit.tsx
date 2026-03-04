import Marquee from "react-fast-marquee";

import img1 from "../../../public/kormokorta/1.jpg";
import img2 from "../../../public/kormokorta/2.jpg";
import img3 from "../../../public/kormokorta/3.jpg";
import img4 from "../../../public/kormokorta/4.jpg";
import img5 from "../../../public/kormokorta/5.jpg";

const images = [img1, img2, img3, img4, img5];

const PoliceUnit = () => {
  return (
    <section className="wrapper mb-10">
      <h1 className="head-4   text-brand!  mb-5">পুলিশ ইউনিট সমূহ</h1>

      <div className="bg-brand rounded-xl  py-6">
        <Marquee speed={60} pauseOnHover={true}>
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[200px] mx-4 rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={img}
                alt={`Police Unit ${index + 1}`}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PoliceUnit;
