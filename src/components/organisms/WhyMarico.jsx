import SectionTitle from "../atoms/SectionTitle";
import WhyMaricoCard from "../molecules/WhyMaricoCard";

import partyIcon from "/src/assets/party.svg";
import happyIcon from "/src/assets/happy.svg";
import smileIcon from "/src/assets/smile.svg";

const WhyMarico = () => {
  return (
    <div className="mx-auto mt-20 w-[95%] max-w-[1640px] lg:mt-44">
      <SectionTitle title="Why Creators Love Marico" />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:mt-16 lg:gap-24">
        <WhyMaricoCard
          title="Reduced Anxiety"
          text="Never worry about losing your audience."
          icon={smileIcon}
        />
        <WhyMaricoCard
          title="Lower Workload"
          text="Just share one link. We'll handle the rest."
          icon={happyIcon}
        />
        <WhyMaricoCard
          title="More Time"
          text="Spend less time on marketing tools"
          icon={partyIcon}
        />
      </div>
    </div>
  );
};

export default WhyMarico;
