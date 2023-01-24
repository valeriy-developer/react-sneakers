import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import AppContext from "./context";
import { getSneakers } from "./api/fetchItems";
import { getCartSneakers } from "./api/fetchCart";
import { computePrice } from "./utils/computePrice";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);

  useEffect(() => {
    const price = computePrice(cartSneakers);

    setTotalPrice(price);
    setTotalPriceWithTax(price + price * 0.05);
  }, [cartSneakers]);

  useEffect(() => {
    const fetchSneakers = async () => {
      const sneakersData = await getSneakers();
      const cartData = await getCartSneakers();

      setSneakers(sneakersData);

      setCartSneakers(cartData);
    };

    fetchSneakers();
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
          totalPrice,
          totalPriceWithTax,
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
