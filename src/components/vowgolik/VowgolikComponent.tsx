import Map from "../contact/Map";
import OpojelaSomoho from "./OpojelaSomoho";
import VowgolikCard from "./VowgolikCard";

const VowgolikComponent = () => {
  return (
    <div>
      {/* top part start  */}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">ভৌগলিক পরিচিতি ও জেলার ম্যাপ</h1>
          <p className="para-2 mt-3">
            নারায়ণগঞ্জ জেলার ভৌগলিক তথ্য ও মানচিত্র
          </p>
        </div>
      </div>
      {/* top part end  */}
      <VowgolikCard />
      <OpojelaSomoho />
      <Map />
    </div>
  );
};

export default VowgolikComponent;
