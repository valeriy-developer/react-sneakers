import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import AppContext from "./context";
import axios from "axios";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  // const [isAdded, setIsAdded] = useState(false);
  // const [checkedFavorite, setCheckedFavorite] = useState(false);

  useEffect(() => {
    axios
      .get("https://639714d877359127a02c1f7d.mockapi.io/items/")
      .then((res) => setSneakers(res.data));

    axios
      .get("https://639714d877359127a02c1f7d.mockapi.io/cart/")
      .then((res) => setCartSneakers(res.data));
  }, []);

  return (
    <div className='global-container'>
      <AppContext.Provider
        value={{
          sneakers,
          setSneakers,
          cartSneakers,
          setCartSneakers,
          cartOpened,
          setCartOpened,
        }}>
        <Header />
        <Popup />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
