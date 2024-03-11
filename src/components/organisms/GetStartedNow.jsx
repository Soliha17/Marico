import MarkedText from "../atoms/MarkedText";
import PrimaryBtn from "../atoms/PrimaryBtn";

const GetStartedNow = () => {
  return (
    <div className="mx-auto mt-14 flex w-[95%] max-w-[1640px] flex-col items-center gap-4 md:gap-6 lg:mt-24">
      <img
        src="/src/assets/Mlogo.svg"
        className="w-32 md:w-[164px]"
        alt="m-logo"
      />
      <p className="text-center text-4xl font-semibold text-white md:text-5xl lg:text-6xl xl:text-8xl">
        Get Started Now
      </p>
      <p className="mb-4 text-center text-xl font-normal text-white lg:text-[43px]">
        Setup is easy and takes under 5 minutes.
      </p>
      <PrimaryBtn
        className={
          "h-16 w-60 rounded-2xl text-xl font-semibold leading-[30px] sm:h-16 sm:w-80 lg:text-3xl xl:h-[102px] xl:w-[472px]"
        }
        text="Get Started Now"
      />
      <MarkedText
        shapeW="37px"
        dotW="22.13"
        numberSize="md:text-4xl"
        textSize="md:text-4xl"
      />
    </div>
  );
};

export default GetStartedNow;
