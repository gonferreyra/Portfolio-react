import React from "react";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import FrontCover from "./components/FrontCover/FrontCover";

import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <FrontCover />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
