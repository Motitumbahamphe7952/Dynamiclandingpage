import Components from "../reuseable/component";
// import bgImg from "../../assets/herobg.jpg";
import bgImg from "../../assets/heroimage.jpg";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <Components
      bgImage={bgImg}
      containerClass="shadow-lg"
      paragraphClass="text-gray-400 italic"
      primaryBtnClass="w-full sm:w-auto text-sm sm:text-base md:w-[181px] md:h-[44px] rounded-lg md:text-[18px]"
      secondaryBtnClass="hover:cursor-pointer w-full sm:w-auto text-sm sm:text-base md:w-[181px] md:h-[44px] md:text-[18px]"
      icons={<ArrowRight />}
    />
  );
};

export default HomePage;
