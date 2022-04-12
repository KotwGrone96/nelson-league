import { Routes, Route } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import Champions from "./Pages/Champions";
import Champ from "./Pages/Champ";
import Download from "./Pages/Download";

//COMPONENTS
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/champions" element={<Champions />}></Route>
        <Route path="/champions/:champName" element={<Champ />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
