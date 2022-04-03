import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import GalaxyBook from "./Component/GalaxyBook/GalaxyBook";
import { ScrollToTop } from "./Component/ScrollToTop/ScrollToTop";
import { Fitler_Navbar } from "./Component/Filter_Navbar/Filter_Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Fitler_Navbar />
      <GalaxyBook />
      <ScrollToTop />
    </div>
  );
}

export default App;
