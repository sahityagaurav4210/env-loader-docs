import About from "./views/About";
import Author from "./views/Author";
import BacktoTopButton from "./views/BacktoTopButton";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Index from "./views/Index";
import Installation from "./views/Installation";
import Misc from "./views/Misc";
import Requirements from "./views/Requirements";
import Usage from "./views/Usage";

function App() {
  return (
    <>
      <Header />

      <main className="container m-auto">
        <section id="index">
          <Index />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="author">
          <Author />
        </section>

        <section id="requirements">
          <Requirements />
        </section>

        <section id="installation">
          <Installation />
        </section>

        <section id="usage">
          <Usage />
        </section>

        <section id="misc">
          <Misc />
        </section>
      </main>

      <Footer />
      <BacktoTopButton/>
    </>
  );
}

export default App;
