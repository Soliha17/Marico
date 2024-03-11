import HeroTitle from "../atoms/HeroTitle";

const Hero = () => {
  return (
    <div className="my-32">
      <HeroTitle text="Own your audience." color="text-white" />
      <HeroTitle text="So you don't lose them." color="text-gradient" />
    </div>
  );
};

export default Hero;
