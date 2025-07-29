
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home';
import Contact from './component/contact/Contact';
import Error from './component/error/Error';
import RestaurantMenu from './component/restaurantmenu/RestaurantMenu'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './component/cart/Cart';
import CategoryPage from './component/categorypage/CategoryPage';
import SignInSidebar from './component/signinbar/SignInSidebar';

function App() {
  const[userName, setUsername] = useState();
  const[isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    const data = {
      name: ''
    }
    setUsername(data.name);
  },[]);

  return (
   <div className='page-layout'>
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInuser: userName}}>
          <Header setIsOpen={()=>setIsOpen(true)}/>
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<h2>Test route working!</h2>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:restId" element={<RestaurantMenu />} />
            <Route path="*" element={<Error />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:id" element={<CategoryPage />} />
          </Routes>
        </UserContext.Provider>
      </Provider>
    <SignInSidebar isOpen={isOpen} setIsOpen={()=>setIsOpen(false)}/>
   </div>
  )
}

export default App
