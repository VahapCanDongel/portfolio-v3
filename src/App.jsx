import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (

    <div className="p-4 flex h-screen w-full flex-col antialiased">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Experience />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
