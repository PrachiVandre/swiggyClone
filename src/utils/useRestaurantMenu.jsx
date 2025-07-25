import React,{useState, useEffect} from 'react'
import {SINGLE_PAGE} from '../utils/constant'

const useRestaurantMenu = (restId) => {
  const[allprod, setAllprod] = useState([]);
  const [menu, setMenu] = useState([]);

  console.log("allprod",allprod)

  const getAllProducts = async() => {
    const res = await fetch(`${SINGLE_PAGE}${restId}`);
    const json = await res.json();
    setAllprod(json?.data?.cards[2]?.card?.card?.info);
    const menucard = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setMenu(menucard);

    //setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    // if(menucard?.itemCards){
    //     setMenu(menucard?.itemCards);
    //   } else if(menucard?.categories?.length > 0){
    //     const combinedItems = menucard?.categories.flatMap((cat)=>cat.itemCards || []);
    //     setMenu(combinedItems)
    //   } else {
    //     setMenu([]);
    //   }

      // console.log("inside custom hook", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]);


  }

  useEffect(()=>{
      getAllProducts();
  },[restId]);
  
  return {allprod, menu}
}

export default useRestaurantMenu