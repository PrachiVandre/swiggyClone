import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage.css";
import useCategorylist from "../../utils/useCategorylist";
import { MdStars } from "react-icons/md";

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5009379&lng=73.9010765&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null

const CategoryPage = () => {
  const { id } = useParams();
  const restaurantList = useCategorylist(id);

  console.log(restaurantList);

  return (
    <div>
      <div className="pageLayout">
        <h1>{restaurantList[0]?.card?.card?.title}</h1>
        <h3>{restaurantList[0]?.card?.card?.description}</h3>
        <h2>{restaurantList[0]?.card?.card?.count} to explore</h2>

        <div className="cardwrapper">
          {restaurantList.map((item) => {
            if (!item?.card?.card?.info) return null;

            const {
              id,
              name,
              cloudinaryImageId,
              aggregatedDiscountInfoV3,
              avgRating,
              cuisines,
              locality,
            } = item.card.card.info;

            return (
              <div className="card" key={id}>
                <div className="img_box">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                  />
                  <div className="gradient-overlay">
                    <span>{`${aggregatedDiscountInfoV3?.header}${aggregatedDiscountInfoV3?.subHeader}`}</span>
                  </div>
                </div>
                <h3>{name}</h3>
                <h4>
                  <MdStars style={{ color: "#198d3d", fontSize: "20px" }} />
                  {avgRating}
                  <span></span>
                </h4>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
