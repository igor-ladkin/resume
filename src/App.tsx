import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="bg-gray-300/70 flex flex-col justify-center items-center w-[100vw] h-[100vh] print:bg-white print:p-0 print:w-[794px] print:h-[1123px] print:shadow-none">
      <div className="flex flex-col gap-4 w-[794px] h-[1123px] drop-shadow-lg bg-white print:shadow-none p-10 text-slate-800">
        <header className="flex flex-row items-center justify-between">
          <h1 className="text-5xl font-bold">
            Igor <br />
            Ladkin
          </h1>
          <Contacts />
        </header>
        <main className="flex flex-col gap-2 text-sm font-light">
          <Summary />
          <Experience />
          <Education />
          <Skills />
        </main>
      </div>
    </div>
  );
}

export default App;
