import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import AppContext from "./context";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [checkedItems, setCheckedItems] = useState(false);
  // const [checkedFavorite, setCheckedFavorite] = useState(false);

  useEffect(() => {
    fetch("https://639714d877359127a02c1f7d.mockapi.io/items/").then((res) =>
      res.json().then((json) => setSneakers(json))
    );
  }, []);

  return (
    <div className='global-container'>
      <AppContext.Provider
        value={{
          sneakers,
          cartSneakers,
          cartOpened,
          setCartOpened,
          checkedItems,
          setCheckedItems,
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
