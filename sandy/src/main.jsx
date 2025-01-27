import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Games from "./components/Games.jsx";
import Dalgona_Game from "./components/Games/Dalgona/Dalgona_Game.jsx";
import Dalga from "./components/Games/Dalgona/Dalga.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/dalgona" element={<Dalgona_Game />} />
      <Route path="/games/dalga" element={<Dalga/>}/>
    </Routes>
  </BrowserRouter>
);
