import React, { useEffect, useState } from "react";

const useCategorylist = (collectionId) => {
const [restaurantList, setRestaurantList] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5009379&lng=73.9010765&collection=${collectionId}&type=rcv2&offset=0&page_type=null`
    );
    const json = await res.json();
     setRestaurantList(json?.data?.cards || []);
    console.log("json", json?.data?.cards || []);
  };

  useEffect(()=>{
    if (collectionId) {
        fetchData()
    }
  },[collectionId]);

  return restaurantList;
};

export default useCategorylist;

