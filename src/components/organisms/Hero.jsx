import HeroTitle from "../atoms/HeroTitle";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-32">
      <HeroTitle text="Own your audience." color="text-white" />
      <HeroTitle text="So you don't lose them." color="text-gradient" />
      <Contact />
    </div>
  );
};

export default Hero;
