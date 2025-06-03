import React, { useState, useEffect } from "react";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import { MENU_IMG } from "../../utils/constant";
import { IoMdPricetag } from "react-icons/io";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from '../restaurantCategory/RestaurantCategory'

const RestaurantMenu = () => {
  const { restId } = useParams();
  const { allprod, menu } = useRestaurantMenu(restId);
  const [showIndex, setShowindex] = useState(0);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwo,
    cuisines,
    areaName,
  } = allprod;

  // console.log(menu);
  //console.log(menu[2]?.card?.card?.["@type"])

  const getRandomColor = () => {
    const bgColors = ["#fdf3e3", "#e6f4ea", "#e6f4f1", "#e9f0fa", "#fff5f0"];
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  };

  const filteredMenu = menu.filter(
    (cat) => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  //    const filteredMenu = menu.filter(
  //     (item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  //   console.log("heading", filteredMenu);

  return (
    <div className="restodetails">
      <h1>{name}</h1>
      <div className="headerwrap">
        <div className="wrap">
          <h4>
            <span>
              <em>★</em> {avgRating}({totalRatingsString})
            </span>
            <span>₹{costForTwo / 100} for two</span>
          </h4>
          <h5>{cuisines?.join(", ") || "Not Available"}</h5>
          <h5 className="outlet">
            Outlet: <span>{areaName}</span>
          </h5>
          <h5 className="period">
            <span>{allprod?.sla?.slaString}</span>
          </h5>
        </div>
      </div>
      <div className="menuwrapper">
        {filteredMenu.map((category, index) => {
            return(
              <RestaurantCategory key={index}  showItem={index == showIndex ? true : false } setShowindex={()=>setShowindex(index)} data={category?.card?.card} />
            )
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
