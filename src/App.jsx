import "aos/dist/aos.css";
import AOS from "aos";

import WhyMarico from "./components/organisms/WhyMarico";
import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";
import Step1 from "./components/organisms/Step1";
import YourHomepage from "./components/organisms/YourHomepage";
import Step2 from "./components/organisms/Step2";
import OneLinkCollects from "./components/organisms/OneLinkCollects";
import Step3 from "./components/organisms/Step3";
import CreateShare from "./components/organisms/CreateShare";
import ExpertsAgree from "./components/organisms/ExpertsAgree";
import Audience from "./components/organisms/Audience";
import GetStartedNow from "./components/organisms/GetStartedNow";
import Footer from "./components/organisms/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

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
        <ExpertsAgree />
        <Audience />
        <GetStartedNow />
        <Footer />
      </div>
    </div>
  );
}

export default App;
