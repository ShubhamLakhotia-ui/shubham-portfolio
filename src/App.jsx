import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Conatct/Contact";
import Experience from "./components/Experience/Experience";
import Experience2 from "./components/Experience2/Experience2";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />

        <Experience2 />

        <Experience />
        <About></About>
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
