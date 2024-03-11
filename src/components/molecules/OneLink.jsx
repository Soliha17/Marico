import GreenText from "../atoms/GreenText";
import OneLinkTitle from "../atoms/OneLinkTitle";

const OneLink = () => {
  return (
    <div className="bg-black-dark md:w-1/2">
      <div className="ml-11 mt-8">
        <GreenText text="One Link" />
        <OneLinkTitle title="ALL You Create." whiteTitle="One Link" />
      </div>
      <img
        src="/src/assets/photo_2024-03-12_01-03-53-removebg-preview.png"
        alt="camera"
        className="ml-auto mt-10 max-w-[90%]"
      />
    </div>
  );
};

export default OneLink;
