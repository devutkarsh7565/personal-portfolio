import Card from "./Components/Card";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <>
      <div
        className="px-10
    py-10 min-h-screen sm:px-5 bg-gray-100 dark:bg-[#041C32]"
      >
        <Nav />
        <div className="h-screen flex flex-col justify-center items-center">
          <div
          // data-aos="fade-down" data-aos-duration="800"
          >
            <Card />
          </div>
          <div
          // data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
          >
            <About />
          </div>
        </div>

        <div
        // data-aos="fade-left" data-aos-duration="800" data-aos-delay="400"
        >
          <Education />
        </div>
        <div
        // data-aos="fade-right" data-aos-duration="800" data-aos-delay="400"
        >
          <Skills />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
