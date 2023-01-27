import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Tweets from "./Pages/Tweets";
import About from "./Pages/About";
import MyPage from "./Pages/MyPage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <section className="features">
        <Routes>
          <Route path="/" element={<Tweets />} />
          <Route path="/about" element={<About />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
