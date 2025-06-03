import React,{useState, useEffect} from 'react'

const useRestaurantMenu = (restId) => {
  const[allprod, setAllprod] = useState([]);
  const [menu, setMenu] = useState([]);

  const getAllProducts = async() => {
    const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${restId}`);
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