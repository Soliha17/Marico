import SectionTitle from "../atoms/SectionTitle";
import WhyMaricoCard from "../molecules/WhyMaricoCard";

const WhyMarico = () => {
  return (
    <div className="mx-auto mt-20 w-[95%] max-w-[1640px] lg:mt-44">
      <SectionTitle title="Why Creators Love Marico" />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:mt-16 lg:gap-24">
        <WhyMaricoCard
          title="Reduced Anxiety"
          text="Never worry about losing your audience."
          icon="/src/assets/smile.svg"
        />
        <WhyMaricoCard
          title="Lower Workload"
          text="Just share one link. We'll handle the rest."
          icon="/src/assets/happy.svg"
        />
        <WhyMaricoCard
          title="More Time"
          text="Spend less time on marketing tools"
          icon="/src/assets/party.svg"
        />
      </div>
    </div>
  );
};

export default WhyMarico;
