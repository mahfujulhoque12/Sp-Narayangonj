import Map from "../components/contact/Map";
import DistricHistory from "../components/home/DistricHistory";
import Hero from "../components/home/Hero";
import ImportantLinksAndNotice from "../components/home/ImportantLinksAndNotice";
import Samprotick from "../components/home/Samprotick";
import VissionMission from "../components/home/VissionMission";
import BottomNav from "../components/navbar/BottomNav";

const Home = () => {
  return (
    <div>
      <BottomNav />
      <Hero />
      <Samprotick />
      <ImportantLinksAndNotice />
      <DistricHistory />
      <VissionMission />
      <Map />
    </div>
  );
};

export default Home;
