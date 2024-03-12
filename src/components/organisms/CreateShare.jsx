import BtnGroupSection from "../molecules/BtnGroupSection";
import NumberedText from "../molecules/NumberedText";

import blackPinkImg from "/src/assets/blackpink.png";

const CreateShare = () => {
  return (
    <div className="mx-auto mt-16 flex w-[95%] max-w-[1640px] flex-col justify-center gap-14 overflow-x-hidden md:justify-between lg:mt-44 lg:gap-20 xl:flex-row">
      <div data-aos="fade-left">
        <p className="text-2xl font-medium text-white md:text-3xl">
          Create & Share
        </p>
        <p className="mb-8 mt-10 text-4xl font-semibold leading-relaxed text-white lg:mt-20 lg:text-7xl lg:leading-[100px]">
          Reach Your <br />
          Audience <span className="text-blue">Directly.</span>
        </p>
        <NumberedText
          text="Embed content or create something new to share."
          number="1"
        />
        <NumberedText
          text="Share content over email, text message or your homepage."
          number="2"
        />
        <BtnGroupSection />
      </div>

      <div data-aos="fade-right">
        <img
          src={blackPinkImg}
          alt="app view mackbook"
          className="w-full max-w-[800px] animate-pulse md:w-auto lg:-mr-[44px]"
        />
      </div>
    </div>
  );
};

export default CreateShare;
