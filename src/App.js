import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Showcase from "./components/Showcase";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Categories from "./components/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      {/* <Route path="/showcase" element={<Showcase />}></Route> */}
      <Route path="/category" element={<Categories />}></Route>
      <Route path="/store" element={<Showcase />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>

    // <>
    //   <Nav />
    //   <Main />
    // </>
  );
}

export default App;
