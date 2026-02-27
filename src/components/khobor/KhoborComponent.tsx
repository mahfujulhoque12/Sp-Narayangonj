import KhoborTab from "./KhoborTab";

const KhoborComponent = () => {
  return (
    <div>
      {/* top part start  */}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">সর্বশেষ সংবাদ ও বিজ্ঞপ্তি</h1>
          <p className="para-2 mt-3">
            নারায়ণগঞ্জ জেলা পুলিশের সর্বশেষ সংবাদ ও বিজ্ঞপ্তি
          </p>
        </div>
      </div>
      {/* top part end  */}
      <KhoborTab />
    </div>
  );
};

export default KhoborComponent;
