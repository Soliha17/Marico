import OutlineBtn from "../atoms/OutlineBtn";
import PrimaryBtn from "../atoms/PrimaryBtn";

const BtnGroupSection = () => {
  return (
    <div className="mt-16 flex items-center justify-start gap-4">
      <PrimaryBtn
        className={
          "h-14 w-44 rounded-xl text-lg font-medium leading-[30px] sm:h-14 sm:w-44 sm:text-xl xl:h-[65px] xl:w-[207px]"
        }
        text="Get Started Now"
      />
      <OutlineBtn
        className={
          "h-14 w-44 rounded-xl text-lg font-medium leading-[30px] sm:h-14 sm:w-44 sm:text-xl xl:h-[65px] xl:w-[207px]"
        }
        text="View A Demo"
      />
    </div>
  );
};

export default BtnGroupSection;
