import React from "react";

const DownloadPresentation: React.FC = () => {
  return (
    <section className="bg-beige-light py-[150px] md:py-[200px]">
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
        <button
          className="inline-flex uppercase items-center justify-center whitespace-nowrap rounded-full text-sm font-normal ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary dark:focus-visible:ring-primary bg-primary text-white hover:bg-primary/90 py-2 px-4 md:py-5 md:px-7 h-10 md:h-12"
          id="cta-btn-get-project-presentation"
        >
          Get Project presentation
        </button>
      </div>
    </section>
  );
};

export default DownloadPresentation;
