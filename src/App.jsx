import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto max-w-[1920px] pt-7 sm:pt-11">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
