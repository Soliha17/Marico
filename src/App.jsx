import WhyMarico from "./components/organisms/WhyMarico";
import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";
import Step1 from "./components/organisms/Step1";
import YourHomepage from "./components/organisms/YourHomepage";

function App() {
  return (
    <div className="w-full bg-black">
      <div className="relative mx-auto max-w-[1920px] pt-7 sm:pt-11">
        <Navbar />
        <Hero />
        <WhyMarico />
        <Step1 />
        <YourHomepage />
      </div>
    </div>
  );
}

export default App;
