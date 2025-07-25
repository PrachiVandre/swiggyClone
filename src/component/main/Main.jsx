import React, { useEffect, useState } from "react";
import "./Main.css";
import WhatsOnYourMind from "../whatsonyourmind/WhatsOnYourMind";
import RestoChain from "../restochain/RestoChain";

const Main = () => {
  const [list, setAllList] = useState([]);


  const getAllList = async () => {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5009379&lng=73.9010765&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await res.json();
    setAllList(json?.data?.cards);
  };

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <div>
      {list.length > 0 && (
        <>
          <WhatsOnYourMind list={list} />
          <RestoChain list={list} />
        </>
      )}
    </div>
  );
};

export default Main;
