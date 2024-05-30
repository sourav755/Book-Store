import "./App.css";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Courses />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
