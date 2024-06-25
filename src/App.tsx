import Author from "./views/Author";
import Header from "./views/Header";

function App() {
  return (
    <>
      <Header />

      <main className="container m-auto">
        <Author/>
      </main>
    </>
  );
}

export default App;
