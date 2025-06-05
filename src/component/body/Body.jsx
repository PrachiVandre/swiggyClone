import React,{useState, useEffect} from "react";
import ResCard from '../rescard/ResCard'
import './Body.css'
import { API_URL } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const[carddetail, setCarddetail] = useState([]);
  const[inputval, setInputval] = useState();
  const [listData, setListdata] = useState([]);

  console.log("listdata", listData);

  const onlineStatus = useOnlineStatus();

  const getAllCards = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    setCarddetail(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    getAllCards();
  }, []);


  if(onlineStatus === false){
    return(
      <h2 className="online">Looks like you are offline</h2>
    )
  }  

  const handleClick = () => {
    const filteredData = carddetail.filter((item)=>{
      return item?.info?.name.toLowerCase().includes(inputval.toLowerCase());
    });
    setListdata(filteredData);
  }

  return (
  <div className="body">
    <div className="search">
      <input placeholder="Search" type="text" value={inputval} onChange={(e)=> setInputval(e.target.value)}/>
      <button onClick={handleClick}>Search</button>
    </div>
    <div className="res-container"><ResCard carddetail={listData}/></div>
  </div>
  )
};

export default Body;
