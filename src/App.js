import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem('theme', theme = 'light');
  }

  if (theme === "dark") {
    document.querySelector("body").style.cssText = 'background:#0B0B0C; color:#fff;';
  } else {
    document.querySelector("body").style.cssText = 'background:#f4f4f4; color:#000;';
  }

  return (
    <>
      <div className="max-w-[1260px] mx-auto">
        <Header />
        <Tabs />
      </div>
    </>
  );
}

export default App;
