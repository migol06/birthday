import { Routes, Route } from "react-router-dom";  // ✅ No extra Router here!
import { Home, Picture, Card, Cake, Present } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pictures" element={<Picture />} />
      <Route path="/card" element={<Card />} />
      <Route path="/cake" element={<Cake />} />
      <Route path="/present" element={<Present />} />
    </Routes>
  );
}

export default App;
