import React, { useRef } from "react";
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import "./WhatsOnYourMind.css";
import {useNavigate} from 'react-router-dom'

const WhatsOnYourMind = ({list}) => {

  // console.log("WhatsOnYourMind", list);
  const navigate = useNavigate();
  const categoryList = list[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  const sliderRef = useRef();
  const handleForward = () => {
    if(sliderRef.current){
        sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 300;
    } 
  };
  const handleBackward = () => {
    if(sliderRef.current){
        sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 300;  
    }
  }

  const handleMenu = (link) => {
    const collectionId = new URL(link).searchParams.get("collection_id");
    navigate(`category/${collectionId}`);
  }

  return (
    <div className="wrapper">
      <h2>
        <span>What's on your mind?</span>
        <div>
          <button className="backward" onClick={handleBackward}>
            <MdArrowBackIosNew />
          </button>
          <button  className="forward" onClick={handleForward}>
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </h2>
      <div className="imgWrap" ref={sliderRef}>
        <div className="categoryList">
          {categoryList?.map((item) => {
             return (
              <>
              <p key={item.id}>
                <img onClick={()=>handleMenu(item?.action?.link)}           
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                />
                
              </p>
             
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
