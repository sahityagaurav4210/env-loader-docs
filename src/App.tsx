import About from "./views/About";
import Author from "./views/Author";
import Header from "./views/Header";
import Requirements from "./views/Requirements";

function App() {
  return (
    <>
      <Header />

      <main className="container m-auto">
        <Author/>
        <About/>
        <Requirements/>
      </main>
    </>
  );
}

export default App;
