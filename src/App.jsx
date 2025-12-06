import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Toolkit from "./components/Toolkit";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-navy)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Toolkit />
        <Experience />
        <Education />
        <Awards />
        <Footer />
      </main>
    </div>
  );
}

export default App;
