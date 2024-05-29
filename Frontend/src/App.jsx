import "./App.css";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Courses />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
