import img from "../assets/section-8-image-1 (1).png";

const ClipPathSection: React.FC = () => {
  return (
    <section>
      <div className="h-[300vh] bg-red relative overflow-x-hidden overflow-y-clip ">
        <svg
          className="z-20 absolute"
          viewBox="0 0 1270 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 0 392 C 201 392 201 230 402 230 L 402 230 L 402 0 L 0 0 Z"
            stroke-width="0"
          ></path>{" "}
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 401 230 C 609.5 230 609.5 266 818 266 L 818 266 L 818 0 L 401 0 Z"
            stroke-width="0"
          ></path>{" "}
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 817 266 C 1043.5 266 1043.5 78 1270 78 L 1270 78 L 1270 0 L 817 0 Z"
            stroke-width="0"
          ></path>
        </svg>

        <img
          src={img}
          alt=""
          className="w-[120%] h-[120%] object-cover translate-y-[-200px] z-12 absolute "
        />
        <svg
          viewBox="0 0 1270 354"
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute bottom-0 w-full z-30 "
        >
          <path
            fill="rgba(255, 255, 255, 0)"
            d="M 0 340 C 353.5 340 353.5 203 707 203 L 707 203 L 707 0 L 0 0 Z"
            stroke-width="0"
          ></path>{" "}
          <path
            fill="rgba(255, 255, 255, 0)"
            d="M 706 203 C 988 203 988 25 1270 25 L 1270 25 L 1270 0 L 706 0 Z"
            stroke-width="0"
          ></path>{" "}
        </svg>
      </div>
    </section>
  );
};

export default ClipPathSection;
