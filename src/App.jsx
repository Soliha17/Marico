import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <div className="bg-black w-full">
      <div className="pt-11 max-w-[1920px] mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
