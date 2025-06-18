


import { ArrowDown } from "lucide-react";

interface HeroProps {
  title?: string;
  highlight1?: string;
  middleText?: string;
  highlight2?: string;
  showParagraph?: boolean;
  paragraph?: string;
  bgImage: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  containerClass?: string;
  headingClass?: string;
  paragraphClass?: string;
  primaryBtnClass?: string;
  secondaryBtnClass?: string;
  icons?: React.ReactNode;
}

const Components = ({
  title = "Engineering The ",
  highlight1 = "Future",
  middleText = "",
  highlight2 = "Unified",
  showParagraph = false,
  paragraph = "",
  bgImage,
  primaryBtnText = "Consult With Us",
  secondaryBtnText = "Explore Us",
  containerClass = "",
  headingClass = "",
  paragraphClass = "",
  primaryBtnClass = "",
  secondaryBtnClass = "",
  icons = "",
}: HeroProps) => {
  
  
  return (
    <section
      className={`relative h-full bg-cover bg-center ${containerClass} z-20`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 py-16 md:py-32">
        <div className="w-full max-w-4xl mb-6 mt-[208px] ">
          <h1
            className={`text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight ${headingClass}`}
          >
            {title} <span className="text-[#4682B4]">{highlight1}</span>{" "}
            {middleText}
            <br />
            Through <span className="text-[#4682B4]">{highlight2}</span> Vision.
          </h1>
        </div>
        <div>
          <div>
            <h1></h1>
          </div>
        </div>

        {showParagraph && (
          <p
            className={`max-w-2xl text-gray-300 mb-6 text-sm sm:text-base ${paragraphClass}`}
          >
            {paragraph}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-12 md:mt-[50px]">
          <button
            className={`bg-[#4682B4] hover:bg-[#557895] text-white py-2 px-5 rounded ${primaryBtnClass}`}
          >
            {primaryBtnText}
          </button>
          <button
            className={`group flex items-center gap-x-2 text-white transition ${secondaryBtnClass}`}
          >
            {secondaryBtnText}
            <span className="transition-transform duration-300 group-hover:-rotate-45">
              {icons}
            </span>
          </button>
        </div>

        
        <div
          className="text-sm text-gray-300 animate-bounce flex items-center gap-2 cursor-pointer"
          onClick={() => {
            const el = document.getElementById("next-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="rounded-lg border-2 w-5 h-6 flex justify-center items-center">
            <ArrowDown className="w-5 h-5" />
          </span>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Components;
