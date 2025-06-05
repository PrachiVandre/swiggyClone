import React, {useContext} from 'react'
import './ResCard.css';
import { Link } from "react-router-dom";
import {CARD_IMG} from '../../utils/constant'
import userContext from '../../utils/userContext';

const ResCard = ({carddetail}) => {
  const {loggedInuser} = useContext(userContext)

  return (
    <div className="res-card">

      {
       carddetail && carddetail.map((cards)=>{   
     
          const{id, cloudinaryImageId, name, avgRating, sla, cuisines, locality} = cards?.info;

          return(
           <Link key={id} to={`/product/${id}`}> 
              <div  data-testid="rescard" className='cards'>
              <img src={`${CARD_IMG}${cloudinaryImageId}`}/>
              <h4 style={{fontSize:'18px'}}>{name}</h4>
              <h5 style={{fontSize:'16px'}}>
                <span >★</span>{avgRating}
                &nbsp;&nbsp;•&nbsp;{sla?.slaString}</h5>
              <p>{cuisines.join(", ")}</p>
              <p>{locality}</p>
              <h6>{loggedInuser}</h6> 
            </div>
            </Link>
          )
        })
      }
    </div>
  )
}
{/* Higher order component */}

// export const withOfferLabel = (ResCard) =>{
//   return (props)=>{
//     return(
//       <div>
//         <label>Offer</label>
//         <ResCard {...props} style={{border:'2px solid red'}}/>
//       </div>
//     )
//   }
// }

export default ResCard