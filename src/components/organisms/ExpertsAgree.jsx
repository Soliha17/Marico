import SectionTitle from "../atoms/SectionTitle";

import expertsAgreeImg from "/src/assets/expertsAgree.png";

const ExpertsAgree = () => {
  return (
    <div className="mx-auto mt-16 w-[95%] max-w-[1640px] lg:mt-24">
      <div data-aos="flip-down">
        <SectionTitle title="Experts Agree" />
      </div>

      <img
        className="mt-7 w-full lg:mt-14"
        src={expertsAgreeImg}
        alt="experts agree"
      />
    </div>
  );
};

export default ExpertsAgree;
