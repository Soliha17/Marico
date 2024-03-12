import BtnGroupSection from "../molecules/BtnGroupSection";
import NumberedText from "../molecules/NumberedText";

import macbookImg from "/src/assets/mackbook.png";

const YourHomepage = () => {
  return (
    <div className="mx-auto mt-16 flex w-[95%] max-w-[1640px] flex-col justify-center gap-14 overflow-x-hidden md:justify-between lg:mt-44 lg:gap-20 xl:flex-row">
      <div data-aos="fade-right">
        <p className="text-2xl font-medium text-white md:text-3xl">
          Your Homepage
        </p>
        <p className="mb-8 mt-10 text-4xl font-semibold leading-relaxed text-white lg:mt-20 lg:text-7xl lg:leading-[100px]">
          Your Content. <br />
          All in <span className="text-blue">One Spot</span>
        </p>
        <NumberedText
          text="Bring all of your content together into one homepage."
          number="1"
        />
        <NumberedText
          text="Your page automatically updates whenever you create."
          number="2"
        />
        <BtnGroupSection />
      </div>

      <div data-aos="fade-left">
        <img
          src={macbookImg}
          alt="app view mackbook"
          className="w-full max-w-[850px] animate-pulse md:w-auto lg:-mr-[44px]"
        />
      </div>
    </div>
  );
};

export default YourHomepage;
