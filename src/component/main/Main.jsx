import React, { useEffect, useState } from "react";
import "./Main.css";
import WhatsOnYourMind from "../whatsonyourmind/WhatsOnYourMind";
import RestoChain from "../restochain/RestoChain";
import { API_URL } from "../../utils/constant";

const Main = () => {
  const [list, setAllList] = useState([]);


  const getAllList = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    setAllList(json?.data?.cards ?? []);
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
