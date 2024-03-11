import SectionText from "../atoms/SectionText";
import SectionTitle from "../atoms/SectionTitle";
import StepText from "../atoms/StepText";

const Step3 = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-2 md:mt-32 xl:mt-40">
      <StepText text="Step 3" />
      <SectionTitle title="Send Emails & Text Messages" />
      <SectionText
        text="No more going through a social platform. Reach and engage
your audience directly over email and text massage."
      />
    </div>
  );
};

export default Step3;
