import OutlineBtn from "../atoms/OutlineBtn";
import SectionText from "../atoms/SectionText";
import SectionTitle from "../atoms/SectionTitle";
import StepText from "../atoms/StepText";

const Step1 = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-2 md:mt-32 xl:mt-40">
      <StepText text="Step 1" />
      <SectionTitle title="Connect Your Content" />
      <SectionText
        text="Bring all of your content together and get a Homepage that
automatically updates whenever you create anywhere online."
      />
      <OutlineBtn
        className={
          "mt-8 h-16 w-64 rounded-2xl text-lg font-medium leading-[30px] sm:w-72 sm:text-xl xl:h-[76px] xl:w-[312px]"
        }
        text="View Avaliable Sources"
      />
    </div>
  );
};

export default Step1;
