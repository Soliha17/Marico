import GreenText from "../atoms/GreenText";
import OneLinkTitle from "../atoms/OneLinkTitle";

import cameraImg from "/src/assets/photo_2024-03-12_01-03-53-removebg-preview.png";

const OneLink = () => {
  return (
    <div className="bg-black-dark md:w-1/2" data-aos="fade-right">
      <div className="ml-11 mt-8">
        <GreenText text="One Link" />
        <OneLinkTitle title="ALL You Create." whiteTitle="One Link" />
      </div>
      <img src={cameraImg} alt="camera" className="ml-auto mt-10 max-w-[90%]" />
    </div>
  );
};

export default OneLink;
