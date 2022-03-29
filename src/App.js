import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Showcase from "./components/Showcase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/showcase" element={<Showcase />}></Route>
    </Routes>

    // <>
    //   <Nav />
    //   <Main />
    // </>
  );
}

export default App;
