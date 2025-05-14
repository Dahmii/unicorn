import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Grants from "./components/Grants";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Grants />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}

export default App;
