import SBeboron from "./SBeboron";
import Sobida from "./Sobida";
import Thana from "./Thana";
import Unit from "./Unit";

const PoliceLinesComponent = () => {
  return (
    <div>
      {" "}
      {/* top part start  */}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">পুলিশ লাইন্স, নারায়ণগঞ্জ</h1>
          <p className="para-2 mt-3">জেলা পুলিশ লাইন্সের তথ্য ও সুবিধাসমূহ</p>
        </div>
      </div>
      {/* top part end  */}
      <SBeboron />
      <Sobida />
      <Unit />
      <Thana />
    </div>
  );
};

export default PoliceLinesComponent;
