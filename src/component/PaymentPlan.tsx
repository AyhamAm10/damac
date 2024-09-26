
import { useInView } from "react-intersection-observer";
import Counter from "./customComponent/Counter";
import ClipPathSection from "./ClipPathSection";
import ButtinRed from "../component/customComponent/ButtonRed";
import { motion } from "framer-motion";
import { hoverVariant } from "../variants/hoverVariant";
const PaymentPlan = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="mt-[150px] md:mt-[200px]">
      <div className="px-3" ref={ref}>
        <p className="h2 text-center text-lg font-medium uppercase tracking-superWide">
          PAYMENT PLAN
        </p>
        <h3 className="text-4xl tracking-tight mb-[60px] text-center text-black md:mb-[90px]"></h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 justify-items-center gap-[40px] md:grid-cols-[repeat(3,143px)] md:gap-[80px]">
            <div>
              <div className="h4 md:bg-5 mb-2.5 flex justify-center md:justify-start">
                {inView && <Counter targetValue={20} />}
                <span>%</span>
              </div>
              <span className="body-3">On Booking</span>
            </div>
            <div>
              <div className="h4 md:bg-5 mb-2.5 flex justify-center md:justify-start">
                {inView && <Counter targetValue={55} />}
                <span>%</span>
              </div>
              <span className="body-3">During Construction</span>
            </div>
            <div>
              <div className="h4 md:bg-5 mb-2.5 flex justify-center md:justify-start">
                {inView && <Counter targetValue={25} />}
                <span>%</span>
              </div>
              <span className="body-3">On Handover</span>
            </div>
          </div>
        </div>
      </div>
      <ClipPathSection />
      <motion.div
        variants={hoverVariant}
        initial="hidden"
        whileInView="visible"
        className="bg-beige-light py-[150px] md:py-[200px]"
      >
        <div className="container flex flex-col items-center justify-center">
          <p className="body-1 mb-2.5 text-center text-black uppercase">
            Immerse yourself in a world of nature
          </p>
          <h3 className="h3 mb-2.5 text-center text-black md:mb-5">
            Download the Full Presentation
          </h3>
          <p className="body-3 mb-5 max-w-[472px] text-center text-black md:mb-[50px]">
            a beautifully designed publication that showcases the unparalleled
            living experience offered by the community.
          </p>
          <ButtinRed value="Get Project presentation" />
        </div>
      </motion.div>
    </section>
  );
};

export default PaymentPlan;
