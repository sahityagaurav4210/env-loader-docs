import About from "./views/About";
import Author from "./views/Author";
import Header from "./views/Header";
import Installation from "./views/Installation";
import Requirements from "./views/Requirements";
import Usage from "./views/Usage";

function App() {
  return (
    <>
      <Header />

      <main className="container m-auto">
        <Author/>
        <About/>
        <Requirements/>
        <Installation/>
        <Usage/>
      </main>
    </>
  );
}

export default App;
