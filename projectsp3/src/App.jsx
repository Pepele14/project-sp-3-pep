import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/errorpage.jsx";
import Launches from "./pages/launches.jsx";
import News from "./pages/news.jsx";
import HomePage from "./pages/homepage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile/:profileId" />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
