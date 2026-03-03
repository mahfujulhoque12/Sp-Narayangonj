import Map from "../components/contact/Map";
import DistricHistory from "../components/home/DistricHistory";
import Hero from "../components/home/Hero";
import ImportantLinksAndNotice from "../components/home/ImportantLinksAndNotice";
import PoliceUnit from "../components/home/PoliceUnit";
import Samprotick from "../components/home/Samprotick";
import VissionMission from "../components/home/VissionMission";
import BottomNav from "../components/navbar/BottomNav";

const Home = () => {
  return (
    <div>
      <BottomNav />
      <Hero />
      <ImportantLinksAndNotice />
      <Samprotick />
      <DistricHistory />
      <VissionMission />
      <Map />
      <PoliceUnit />
    </div>
  );
};

export default Home;
