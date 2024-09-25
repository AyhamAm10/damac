import { div } from "framer-motion/client";
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
const App: React.FC = () => {
  return (
    <div>
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
      <ReliableDeveloper />
      <Footer/>
    </div>
  );
};

export default App;
