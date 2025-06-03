import React, {useState, useEffect} from 'react';
import './RestaurantMenu.css';
import { useParams } from 'react-router-dom';
import { MENU_IMG } from '../../utils/constant';
import { IoMdPricetag } from "react-icons/io";


const RestaurantMenu = () => {
    const[allprod, setAllprod] = useState([]);
    const [menu, setMenu] = useState([]);
    const {restId} = useParams();

    

    const {name,avgRating,totalRatingsString, costForTwo, cuisines,areaName} = allprod;

    const getAllProducts = async() => {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${restId}`);
        const json = await res.json();

        console.log("json-prod", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

        setAllprod(json?.data?.cards[2]?.card?.card?.info);
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    useEffect(()=>{
        getAllProducts();
    },[]);

   const getRandomColor = () => {
    const bgColors = ["#fdf3e3", "#e6f4ea", "#e6f4f1", "#e9f0fa", "#fff5f0"];
    return bgColors[Math.floor(Math.random() * bgColors.length)];
   }

  return (
    <div className='restodetails'>
        <h1>{name}</h1>
        <div className='headerwrap'>
            <div className='wrap'>
                <h4>
                    <span><em>★</em> {avgRating}({totalRatingsString})</span>
                    <span>₹{(costForTwo)/100}  for two</span>
                </h4>
                <h5>
                    {cuisines?.join(', ') || "Not Available"}
                </h5>
                <h5 className='outlet'>Outlet: <span>{areaName}</span></h5>
                <h5 className='period'><span>{allprod?.sla?.slaString}</span></h5>
            </div>
        </div>
        <div className="menuwrapper">
        {
                menu.map((item)=>{
                    return(
                       <div className='box'>
                            <div className="left">
                                <h2>{item?.card?.info?.name}</h2>
                                <h3>
                                    <span>₹{Math.floor(item?.card?.info?.price/100)}</span>
                                    {/* <span><IoMdPricetag color="#1ba672" style={{verticalAlign:'top'}}/>{item?.card?.info?.offerTags[0]?.title} </span> */}
                                    {/* <span style={{fontSize:'12px'}}>{item?.card?.info?.offerTags[0]?.subTitle}</span> */}
                                </h3>
                                <p className="rating">
                                {
                                    item?.card?.info?.ratings?.aggregatedRating?.rating ? 
                                    `★ ${item?.card?.info?.ratings?.aggregatedRating?.rating} (${item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})` : "" 
                                }
                                </p>
                                
                                <p className='description'>
                                    {item?.card?.info?.description}
                                </p>
                            </div>

                        <div className="right">
                            <img style={{backgroundColor:getRandomColor()}} src={`${MENU_IMG}${item?.card?.info?.imageId}`} />
                        </div>
                       </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default RestaurantMenu