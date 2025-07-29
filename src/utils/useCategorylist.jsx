import React, { useEffect, useState } from "react";

const proxy = "https://corsproxy.io/?";

const useCategorylist = (collectionId) => {
const [restaurantList, setRestaurantList] = useState([]);

  const fetchData = async () => {
    const targetUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5009379&lng=73.9010765&collection=${collectionId}&type=rcv2&offset=0&page_type=null`;
    const url = proxy + encodeURIComponent(targetUrl);
    const res = await fetch(url);
    const json = await res.json();
     setRestaurantList(json?.data?.cards || []);
    console.log("json", json?.data?.cards || []);
  };

  useEffect(()=>{
    if (collectionId) {
        fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[collectionId]);


  return restaurantList;
};

export default useCategorylist;

