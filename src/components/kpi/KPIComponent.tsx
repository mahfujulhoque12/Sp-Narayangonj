import KPICard from "./KPICard";
import KPIDashboard from "./KPIDashboard";

const KPIComponent = () => {
  return (
    <div>
      {/* top part start  */}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">জেলার কেপিআই সমূহ</h1>
          <p className="para-2 mt-3">
            জেলা পুলিশের মূল কর্মসম্পাদন সূচক ও অর্জন
          </p>
        </div>
      </div>
      {/* top part end  */}

      <KPICard />
      <KPIDashboard />
    </div>
  );
};

export default KPIComponent;
