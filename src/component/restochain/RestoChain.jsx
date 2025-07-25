import React, { useRef } from "react";
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { MdStars } from "react-icons/md";
import "./RestoChain.css";
import Body from "../../component/body/Body";

const RestoChain = ({ list }) => {
  const sliderRef = useRef();
  const topresto =
    list[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const handleBack = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 300;
    }
  };

  const handleForward = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 300;
    }
  };

  return (
    <div className="page">
      <h2>
        <span>Top restaurant chains in Pune</span>
        <div>
          <button className="backward" onClick={handleBack}>
            <MdArrowBackIosNew />
          </button>
          <button className="forward" onClick={handleForward}>
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </h2>
      <div className="toresto_wrap" ref={sliderRef}>
        {topresto.map((item) => {
          const {
            id,
            name,
            avgRating,
            cuisines,
            locality,
            aggregatedDiscountInfoV3,
          } = item.info;

          return (
            // <h2>{item?.info?.name}</h2>
            <div className="card" key={id}>
              <div className="img_box">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.info?.cloudinaryImageId}`}
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



      <Body />
    </div>
  );
};

export default RestoChain;
