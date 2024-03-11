import WhyMarico from "./components/organisms/WhyMarico";
import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";
import Step1 from "./components/organisms/Step1";
import YourHomepage from "./components/organisms/YourHomepage";
import Step2 from "./components/organisms/Step2";
import OneLinkCollects from "./components/organisms/OneLinkCollects";
import Step3 from "./components/organisms/Step3";
import CreateShare from "./components/organisms/CreateShare";

function App() {
  return (
    <div className="w-full bg-black">
      <div className="relative mx-auto max-w-[1920px] pt-7 sm:pt-11">
        <Navbar />
        <Hero />
        <WhyMarico />
        <Step1 />
        <YourHomepage />
        <Step2 />
        <OneLinkCollects />
        <Step3 />
        <CreateShare />
      </div>
    </div>
  );
}

export default App;
