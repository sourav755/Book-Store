import "./App.css";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home></Home>
      <Course></Course> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
      </Routes>
    </>
  );
}

export default App;
