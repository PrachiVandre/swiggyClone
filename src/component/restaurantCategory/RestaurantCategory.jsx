import React from 'react'
import './RestaurantCategory.css'
import ItemList from '../restaurantmenu/ItemList';
import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({data, showItem, setShowindex}) => {
  
  const handleShow = () => {
    setShowindex();
  }

  return (  
    <div key={data.categoryId} className='accordian heading'>
        <div data-testid="accordian_header" className="accordian_header" onClick={()=> handleShow()}>
            <h3>{data?.title} ({data?.itemCards?.length})</h3>
            <span><IoIosArrowDown /></span>
        </div>
       
        <div>
           {
            showItem && <ItemList data={data?.itemCards}/>
           } 
        </div>
    </div>
  )
}

export default RestaurantCategory