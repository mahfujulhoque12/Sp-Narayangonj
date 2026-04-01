import img1 from "../../../public/home/1.jpg";
import img2 from "../../../public/home/2.jpg";
import img3 from "../../../public/home/3.jpg";
import img4 from "../../../public/home/e1.jpg";
import img5 from "../../../public/home/e2.jpg";
import img6 from "../../../public/home/e3.jpg";
import img7 from "../../../public/home/s1.jpg";
import img8 from "../../../public/home/s2.jpg";
import img9 from "../../../public/home/s3.jpg";
import img10 from "../../../public/home/s4.jpg";
import img11 from "../../../public/home/1.jpg";

const GalleryItem = () => {
  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  return (
    <div>
      {/* top part start */}
      <div className="bg-brand py-20">
        <div className="wrapper">
          <h1 className="head-3">সমস্ত ছবি</h1>
          <p className="para-2 mt-3">
            নারায়ণগঞ্জ জেলা পুলিশের সর্বশেষ সংবাদ ও বিজ্ঞপ্তি
          </p>
        </div>
      </div>
      {/* top part end */}

      {/* gallery */}
      <div className="wrapper my-15">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {imgs.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
