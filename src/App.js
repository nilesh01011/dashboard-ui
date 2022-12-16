import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  let theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.querySelector("body").style.cssText = 'background:#f4f4f4; color:#000;';
  } else {
    document.querySelector("body").style.cssText = 'background:#0B0B0C; color:#fff;';
  }

  return (
    <>
      <Header />
      <Tabs />
    </>
  );
}

export default App;
