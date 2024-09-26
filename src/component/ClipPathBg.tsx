import img from "../assets/gallery-18.png";
const ClipPathBg = () => {
  return (
    <section
      className=" overflow-hidden relative flex h-[689px] items-center justify-center md:h-[870px] 3xl:h-[50vw]"
    >
      <svg
        className="absolute left-0 top-0 z-10 hidden w-full -translate-y-[1px] md:block"
        viewBox="0 0 1440 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.646 158.419C181.728 104.91 336.883 50.6771 651 63.9627C686.205 65.4517 717.993 66.9711 747.271 68.3705C983.284 79.6515 1056.12 83.1329 1440 0H0V168.402C9.56595 165.088 19.1019 161.755 28.646 158.419Z"
          fill="white"
        ></path>
      </svg>
      <svg
        className="absolute left-0 top-0 z-10 w-full -translate-y-[1px] md:hidden"
        viewBox="0 0 360 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 79.9963C63.5 37.4176 97.524 27.6683 145.5 30.9663C157.872 31.8167 168.98 32.8527 179.309 33.8161C236.189 39.1211 269.444 42.2228 360 0H0V79.9963Z"
          fill="white"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 left-0 z-10  w-full translate-y-[1px] hidden md:block "
        viewBox="0 0 1440 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1440 0.0546875C1124.5 64.0174 937 57.0215 635.5 28.0384C286.354 -5.5249 0 93.9999 0 93.9999H1440V0.0546875Z"
          fill="white"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 left-0 z-10 w-full translate-y-[1px] md:hidden"
        viewBox="0 0 360 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M360 0.698242C296.408 34.1258 261.052 31.2944 214.29 27.5496C197.813 26.2301 179.919 24.7971 158.875 24.7971C69 24.7971 0 73 0 73H360V0.698242Z"
          fill="white"
        ></path>
      </svg>
      <img src={img} alt="" className="w-full absolute brightness-50 h-full object-cover" />
      <div className="z-10 px-4">
        <h2 className="h2 text-center text-white">
          a choice which you will be proud of
        </h2>
      </div>
    </section>
  );
};

export default ClipPathBg;
