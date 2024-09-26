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
          className="w-[120%] h-[120%] object-cover translate-y-[-200px] z-12 absolute brightness-50 "
        />
        <svg
        className=" rotate-180 absolute bottom-[-1px]"
          viewBox="0 0 1270 456"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 0 253 C 176.5 253 176.5 295 353 295 L 353 295 L 353 0 L 0 0 Z"
            stroke-width="0"
          ></path>{" "}
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 352 295 C 665.5 295 665.5 204 979 204 L 979 204 L 979 0 L 352 0 Z"
            stroke-width="0"
          ></path>{" "}
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 978 204 C 1124 204 1124 251 1270 251 L 1270 251 L 1270 0 L 978 0 Z"
            stroke-width="0"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ClipPathSection;
