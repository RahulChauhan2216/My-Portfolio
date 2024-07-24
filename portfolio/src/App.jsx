import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-black">
        <div className="w-[70%] mx-auto">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
