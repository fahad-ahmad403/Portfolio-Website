import Lenis from "lenis";
import { SparklesPreview } from "./components/SparklesPreview.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  new Lenis({
    autoRaf: true,
  });

  return (
    <BrowserRouter basename="/Portfolio-Website">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<SparklesPreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
