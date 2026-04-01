import GalleryTab from "./GalleryTab";

const GalleryTop = () => {
  return (
    <div>
      {/* top part start  */}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">গ্যালারী</h1>
          <p className="para-2 mt-3">
            নারায়ণগঞ্জ জেলা পুলিশের সর্বশেষ সংবাদ ও বিজ্ঞপ্তি
          </p>
        </div>
      </div>
      {/* top part end  */}
      <GalleryTab />
    </div>
  );
};

export default GalleryTop;
