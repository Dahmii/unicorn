import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Grants from "./components/Grants";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";
import Donate from "./pages/Donate";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Grants />
      <GetInvolved />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
