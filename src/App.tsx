import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="bg-gray-300/70 flex flex-col justify-center items-center min-w-[100vw] min-h-[100vh] print:bg-white print:p-0 print:w-[794px] print:h-[1123px] print:shadow-none md:py-10">
      <div className="flex flex-col gap-4 w-full h-full md:w-[794px] md:h-[1123px] drop-shadow-lg bg-white print:shadow-none p-6 md:p-10 print:p-10 text-slate-800">
        <header className="flex flex-col md:flex-row print:flex-row items-start md:items-center print:items-center justify-between gap-4 md:gap-0 print:gap-0">
          <h1 className="text-5xl font-bold">
            Igor <br />
            Ladkin
          </h1>
          <Contacts />
        </header>
        <main className="flex flex-col gap-2 md:text-sm print:text-sm font-light text-pretty">
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
