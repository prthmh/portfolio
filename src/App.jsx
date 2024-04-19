import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="h-screen w-full bg-neutral-900 flex justify-center items-center text-white flex-col">
      <div className="w-1/2">
        <Header />
        <hr className=" border-neutral-500 opacity-30 my-8" />
        <Projects />
      </div>
    </div>
  );
}

export default App;
