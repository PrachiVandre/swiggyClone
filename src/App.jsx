
import './App.css'
import Header from './component/Header/Header'
// import Home from './component/Home/Home'
import Home from './component/Home/Home';
import Contact from './component/contact/Contact';
import Error from './component/error/Error';
// import Products from './component/products/Products'
import RestaurantMenu from './component/restaurantmenu/RestaurantMenu'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './component/cart/Cart';

function App() {
  const[userName, setUsername] = useState();

  useEffect(()=>{
    const data = {
      name: 'Alexa'
    }
    setUsername(data.name);
  },[]);

  return (
   <>
   <Provider store={appStore}>
    <userContext.Provider value={{loggedInuser: userName}}>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:restId" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </userContext.Provider>
    </Provider>
    {/* <Body /> */}
   </>
  )
}

export default App
