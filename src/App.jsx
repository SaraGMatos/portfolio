import "./App.css";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import SkillsPage from "./components/SkillsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}

export default App;
