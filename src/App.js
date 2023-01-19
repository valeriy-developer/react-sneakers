import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Popup from "./components/Popup";

function App() {
  return (
    <div className='global-container'>
      <Popup/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
