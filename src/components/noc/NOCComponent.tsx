import NocCard from "./NocCard";

const NOCComponent = () => {
  return (
    <div>
      {/* top part start  */}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">এনওসি ড্যাশবোর্ড</h1>
          <p className="para-2 mt-3">অনাপত্তি সনদ (NOC) আবেদন</p>
        </div>
      </div>
      {/* top part end  */}

      <NocCard />
    </div>
  );
};

export default NOCComponent;
