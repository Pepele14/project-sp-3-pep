import { Routes, Route } from "react-router-dom";
import Background from "./components/background-img.jsx";

function App() {
  return (
    <div className="App">
      <Background />
      {/* <Routes>
        <Route path="/" />
        <Route path="/launches" />
        <Route path="/news" />
        <Route path="/profile/:profileId" />
        <Route path="*" />
      </Routes> */}
    </div>
  );
}

export default App;
