import FeaturedWork from "./components/FeaturedWork";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (
    
      <div className="p-4 flex h-screen w-full flex-col">
        <Navigation/>
        <Hero/>
        <FeaturedWork/>

 

      </div>

  );
}

export default App;
