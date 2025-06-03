import React from 'react'
import '../restaurantCategory/RestaurantCategory'
import { MENU_IMG } from '../../utils/constant';
import './ItemList.css'
import { addItem } from '../../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({data}) => {
 const dispatch = useDispatch();

  const handleItem = (item) => {
    dispatch(addItem(item));
    console.log(addItem(item))
  }

  return (
    <div>
        {
            data.map((item, index)=>{
                console.log('item', item)
                return(
                    <div key={index} className='outerBox'>
                        <div className="left">
                            <h2>{item?.card?.info?.name}</h2>
                            <h3>
                                <span>₹{Math.floor(item?.card?.info?.price/100)}</span>
                            </h3>
                            <p className='description'>
                            {item?.card?.info?.description}
                            </p>
                        </div>
                        <div className="right">
                            <button onClick={()=>handleItem(item)}>Add +</button>
                         <img src={`${MENU_IMG}${item?.card?.info?.imageId}`} />
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ItemList