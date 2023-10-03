import "./App.css";
import Compo1 from "./components/compo1";
function App() {
  return (
    <>
      <h1 className="bg-white text-slate-950">Hello</h1>

      <Compo1
        img="../photo_2022-12-14_22-14-17 (2).jpg"
        Name="Priyanshu"
        clickme="https://www.linkedin.com/in/priyanshu-raiyani-201410241/"
      />
    </>
  );
}

export default App;
