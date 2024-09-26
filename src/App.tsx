import HeroSection from "./component/HeroSection";
import AboutUsSection from "./component/AboutUsSection";
import Amenites from "./component/Amenites";
import WhiteList from "./component/WhiteList";
import FloorPlans from "./component/FloorPlans";
import FreeConsultation from "./component/FreeConsultation";
import PaymentPlan from "./component/PaymentPlan";
import Location from "./component/Location"
import ReliableDeveloper from "./component/ReliableDeveloper";
import Footer from "./component/Footer";
import ClipPathBg from "./component/ClipPathBg";
const App: React.FC = () => {
  return (
    <div className=" overflow-hidden">
      <div className="h-[150vh] flex justify-center mb-[300px]">
        <HeroSection />
      </div>
      <AboutUsSection />
      <Amenites />
      <WhiteList />
      <FloorPlans />
      <FreeConsultation />
      <PaymentPlan />
      <Location/>
      <ClipPathBg />
      <ReliableDeveloper />
      <Footer/>
    </div>
  );
};

export default App;
