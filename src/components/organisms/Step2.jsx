import SectionText from "../atoms/SectionText";
import SectionTitle from "../atoms/SectionTitle";
import StepText from "../atoms/StepText";

const Step2 = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-2 md:mt-32 xl:mt-40">
      <StepText text="Step 2" />
      <div data-aos="fade-up">
        <SectionTitle title="Share Your Homepage" />
        <SectionText
          text="Share your Wavium homepage link with your followers, and
we'll handle the rest."
        />
      </div>
    </div>
  );
};

export default Step2;
