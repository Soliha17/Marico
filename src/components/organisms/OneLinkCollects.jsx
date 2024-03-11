import CollectSub from "../molecules/CollectSub";
import OneLink from "../molecules/OneLink";

const OneLinkCollects = () => {
  return (
    <div className="mx-auto mt-16 flex w-[95%] max-w-[1640px] flex-col gap-6 md:mt-44 md:flex-row">
      <OneLink />
      <CollectSub />
    </div>
  );
};

export default OneLinkCollects;
