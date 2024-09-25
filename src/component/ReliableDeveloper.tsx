import { motion } from "framer-motion";
import { hoverVariant } from "../variants/hoverVariant";
import img from "../assets/section-11-image-1 (1).png";
import Counter from "./customComponent/Counter";
import { useInView } from "react-intersection-observer";
const ReliableDeveloper: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="mt-[100px]">
      <motion.div
        variants={hoverVariant}
        initial="hidden"
        whileInView="visible"
        className="container"
      >
        <div className="flex flex-col sm:items-center justify-center gap-5">
          <h3 className="h3 heading max-w-[785px] text-black md:text-center">
            Reliable Developer DAMAC Properties
          </h3>
          <p className="subheading body-3 max-w-[584px] text-black md:text-center">
            Sun City is developed by DAMAC Properties that has been shaping the
            Middle East's retail and real estate market since its inception,
            delivering iconic residential, commercial and leisure properties
            across the region and beyond.
          </p>
        </div>
      </motion.div>
      <div className="container mt-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-5 md:mt-20">
        <div className="md:flex-1">
          <h4 className="h4 max-w-[200px] text-black md:max-w-[685px]">
            Why Choose DAMAC Properties
          </h4>
          <p className="mt-5 text-lg font-medium md:text-3xl md:font-normal">
            The largest private sector developer in the Gulf countries,
          </p>
          <p className="body-3 mt-4 max-w-[614px] text-black md:mt-10">
            Since 2002, DAMAC Properties has been at the forefront of the Middle
            East's luxury real estate market, delivering award-winning
            residential, commercial and leisure properties across the region and
            the world including the UAE, Saudi Arabia, Qatar, Jordan, Lebanon,
            Maldives, Canada and the United Kingdom.
          </p>
          <p className="body-3 mt-5 max-w-[614px] text-black md:text-start">
            Invest with DAMAC and partner with a globally recognized leader in
            premium real estate development.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:mt-[200px]" ref={ref}>
          <div className="flex gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
              >
                <path
                  fill="#D7AC68"
                  fill-rule="evenodd"
                  stroke="#D7AC68"
                  d="M9 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V6h3.75a.75.75 0 0 1 .75.75v4.5A3.75 3.75 0 0 1 27.75 15h-1.262a9.01 9.01 0 0 1-7.738 5.97v4.53H24a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75h5.25v-4.53A9.01 9.01 0 0 1 9.512 15H8.25a3.75 3.75 0 0 1-3.75-3.75v-4.5A.75.75 0 0 1 5.25 6H9zM25.5 12V6h-15v6a7.5 7.5 0 1 0 15 0ZM27 7.5v6h.75A2.25 2.25 0 0 0 30 11.25V7.5zm-21 0h3v6h-.75A2.25 2.25 0 0 1 6 11.25zM12.75 27v3h10.5v-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="mt-2 flex flex-col gap-2 md:mt-0">
              <h2 className="h2 leading-none tracking-normal text-black md:text-start">
                <span> {inView && <Counter targetValue={530} />} </span>+
              </h2>
              <p className="body-3 text-black md:text-start">Awards Received</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
              >
                <path
                  fill="#D7AC68"
                  stroke="#fff"
                  stroke-width="0.4"
                  d="M8.8 28.5v.2h4.9v-7.2a1.8 1.8 0 0 1 1.8-1.8h5a1.8 1.8 0 0 1 1.8 1.8v7.2h4.9V14.9l-.08-.06-9-6.75L18 8l-.12.09-9 6.75-.08.06v13.6Zm10.9-6v-.2h-3.4v7.2a1.8 1.8 0 0 1-1.8 1.8H8a1.8 1.8 0 0 1-1.8-1.8V15a2.8 2.8 0 0 1 1.12-2.24l9.6-7.2a1.8 1.8 0 0 1 2.16 0l9.6 7.2A2.8 2.8 0 0 1 29.8 15v14.5a1.8 1.8 0 0 1-1.8 1.8h-6.5a1.8 1.8 0 0 1-1.8-1.8z"
                ></path>
              </svg>
            </div>
            <div className="mt-2 flex flex-col gap-2 md:mt-0">
              <h2 className="h2 leading-none tracking-normal text-black md:text-start">
                <span> {inView && <Counter targetValue={47.6} />} </span>
              </h2>
              <p className="body-3 text-black md:text-start">Homes Delivered</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="none"
              >
                <g stroke="#D7AC68" stroke-width="2.4">
                  <path
                    stroke-linejoin="round"
                    d="M3.021 11.479H25.98m-22.959 0V24.77a1.21 1.21 0 0 0 1.209 1.208h20.542a1.21 1.21 0 0 0 1.208-1.209V11.48m-22.959 0V6.04A1.21 1.21 0 0 1 4.23 4.833h20.542a1.21 1.21 0 0 1 1.208 1.208v5.438"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.668 18.729 3.625 3.625 7.25-7.25"
                  ></path>
                  <path
                    stroke-linecap="round"
                    d="M9.667 3.02v4.834m9.667-4.833v4.833"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="mt-2 flex flex-col gap-2 md:mt-0">
              <h2 className="h2 leading-none tracking-normal text-black md:text-start">
                <span>{inView && <Counter targetValue={44.0} />}</span>+
              </h2>
              <p className="body-3 text-black md:text-start">
                In Planning and Progress
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:flex-1">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="mt-[100px] flex flex-col items-center justify-center gap-[70px] bg-[#FFF9F6] py-[100px] md:mt-[200px] md:flex-row md:py-[200px]">
        <h3 className="h4 max-w-[527px] text-center text-black md:text-start">
          Now Accepting Cryptocurrency Payments
        </h3>
        <div className="flex gap-4 md:gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 131.747 131.763"
            width="100px"
            fill="#002C1F"
          >
            <path d="M129.776 81.819A65.858 65.858 0 1 1 81.8 1.971a65.863 65.863 0 0 1 47.973 79.847Z"></path>
            <path
              fill="#fff"
              d="M94.91 56.496c1.311-8.766-5.363-13.479-14.49-16.623l2.961-11.875-7.228-1.8-2.883 11.561c-1.9-.474-3.852-.92-5.791-1.363l2.9-11.638-7.222-1.802-2.962 11.871a238 238 0 0 1-4.616-1.085l.008-.037-9.968-2.489-1.923 7.72s5.363 1.229 5.25 1.305c2.928.731 3.457 2.668 3.368 4.2l-3.372 13.533a6 6 0 0 1 .751.241c-.241-.06-.5-.126-.764-.189l-4.725 18.95a2.63 2.63 0 0 1-3.313 1.717c.072.1-5.254-1.311-5.254-1.311l-3.59 8.274 9.407 2.345c1.75.439 3.465.9 5.153 1.33l-2.991 12.011 7.22 1.8 2.963-11.883c1.972.535 3.887 1.029 5.76 1.495l-2.955 11.828 7.228 1.8 2.991-11.988c12.326 2.333 21.594 1.392 25.5-9.757 3.144-8.976-.156-14.154-6.642-17.53 4.723-1.089 8.28-4.2 9.229-10.613ZM78.394 79.655c-2.233 8.976-17.347 4.127-22.247 2.907l3.969-15.912c4.9 1.222 20.613 3.644 18.278 13.005m2.236-23.289c-2.038 8.165-14.617 4.017-18.7 3l3.6-14.432c4.082 1.017 17.223 2.915 15.1 11.432"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 161.425 161.425"
            width="100px"
            fill="#002C1F"
          >
            <path
              d="M80.712 0a80.712 80.712 0 1 0 80.712 80.712A80.71 80.71 0 0 0 80.712 0m-1.046 134.187-31.9-45.12 31.9 18.675Zm0-33.058-32.112-18.81 32.112-14.067Zm0-35.137L48.588 79.6l31.078-52.212v38.6Zm2.07-38.619L113.251 79.8 81.736 65.992Zm0 106.814v-26.445l31.9-18.675Zm0-33.057V68.253l32.136 14.076Z"
              data-name="1175229_eth_ether_ethereum_icon"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 161.425 161.425"
            width="100px"
            fill="#002C1F"
          >
            <path d="M80.712 0a80.712 80.712 0 1 0 80.713 80.713A80.71 80.71 0 0 0 80.712 0m31.331 120.072H48.978l5.3-25.3-10.307 7.067 2.5-13.848 10.78-7.421L67.83 30.094h19.687l-7.28 34.656 25.632-17.64-3 14.349-25.631 17.568-5.07 24.141h43.378Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ReliableDeveloper;
