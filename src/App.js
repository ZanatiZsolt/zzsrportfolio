
import Main from "./main/Main";
import Nav from "./nav/Nav";
import Tech from "./tech/Tech";
import Works from "./works/Works";
import Contact from "./contact/Contact";
import About from "./about/About";

function App() {
  return (
    <div className="scroll-container">
      <div className="scroll-section">
        <Nav />
        <Main />
      </div>
      <div className="scroll-section">
        <About />
      </div>
      <div className="scroll-section">
        <Tech />
      </div>
      <div className="scroll-section">
        <Works />
      </div>
      <div className="scroll-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;