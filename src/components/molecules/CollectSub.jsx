import GreenText from "../atoms/GreenText";
import OneLinkTitle from "../atoms/OneLinkTitle";

const CollectSub = () => {
  return (
    <div
      className="w-full bg-black-dark pb-20 pl-7 pt-8 md:w-1/2"
      data-aos="fade-left"
    >
      <GreenText text="Collect Subscribers" />
      <OneLinkTitle title={`Emails.\n Phone #s.`} whiteTitle="All Yours." />
    </div>
  );
};

export default CollectSub;
