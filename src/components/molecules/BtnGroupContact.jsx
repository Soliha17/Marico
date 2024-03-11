import OutlineBtn from "../atoms/OutlineBtn";
import PrimaryBtn from "../atoms/PrimaryBtn";

const BtnGroupContact = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-7 sm:flex-row">
      <PrimaryBtn
        className={
          "h-14 w-44 rounded-xl text-lg font-medium leading-[30px] sm:h-16 sm:w-48 sm:text-xl xl:h-[77px] xl:w-[313px]"
        }
        text="Get Started Now"
      />
      <OutlineBtn
        className={
          "h-14 w-44 rounded-2xl text-lg font-medium leading-[30px] sm:h-16 sm:w-48 sm:text-xl xl:h-[77px] xl:w-[313px]"
        }
        text="View A Demo"
      />
    </div>
  );
};

export default BtnGroupContact;
