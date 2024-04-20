import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="flex justify-center items-center text-white flex-col mt-24 mb-8">
      <div className=" w-4/5 sm:w-1/2">
        <Header />
        {/* <hr className=" border-neutral-500 opacity-30 my-8" /> */}
        <Projects />
        <TechStack />
        <h2 className="text-center mt-10 text-base text-neutral-300 font-medium">
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/prathmesh-umberkar-31220216a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=" text-blue-400 hover:underline">
              Prathmesh Umberkar
            </span>
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
