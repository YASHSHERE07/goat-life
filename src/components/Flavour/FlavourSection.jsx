import FlavourTitle from "./FlavourTitle";
import FlavourSlider from "./FlavourSlider";

const FlavourSection = () => {
  return (
    // flavour-section — keep class name for GSAP scroll triggers
    <section className="flavour-section min-h-dvh mb-10 bg-[#faeade]">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        {/* Title column */}
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavourTitle />
        </div>

        {/* Slider column */}
        <div className="h-full ml-30">
          <FlavourSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavourSection;
