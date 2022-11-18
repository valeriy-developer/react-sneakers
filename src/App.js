import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
