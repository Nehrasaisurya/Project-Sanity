import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProject from "./components/SingleProject";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Info />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/:slug" element={<SingleProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
