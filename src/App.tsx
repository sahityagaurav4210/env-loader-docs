import About from "./views/About";
import Author from "./views/Author";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Installation from "./views/Installation";
import Misc from "./views/Misc";
import Requirements from "./views/Requirements";
import Usage from "./views/Usage";

function App() {
  return (
    <>
      <Header />

      <main className="container m-auto">
        <Author />
        <About />
        <Requirements />
        <Installation />
        <Usage />
        <Misc />
      </main>

      <Footer />
    </>
  );
}

export default App;
