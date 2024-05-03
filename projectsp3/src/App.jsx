import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/background-img.jsx";
import MenuButton from "./components/menu-button.jsx";
import NotFoundPage from "./pages/notfound.jsx";
import Launches from "./pages/launches.jsx";
import News from "./pages/news.jsx";

function App() {
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <Background />
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <MenuButton />
        </div>
      </div>

      <Routes>
        <Route path="/" />
        <Route path="/launches" element={<Launches />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile/:profileId" />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
