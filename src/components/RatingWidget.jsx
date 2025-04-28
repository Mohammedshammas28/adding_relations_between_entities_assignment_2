import React, { useState } from 'react'

const RatingWidget = ({id,updaterate}) => {

  
const [star,setStar]=useState(0)
const hanglerating=(rating)=>{
    setStar(rating)
    updaterate(id,rating)
}
     
  return (
    <div className='ratingparent'>
        {console.log(star)}
      {[1,2,3,4,5].map((ele) => (
        
        <div className={ele<=star?"starclicked":"star"} onClick={()=>hanglerating(ele)}>
            
        </div>
      ))}
    </div>
  )
}

export default RatingWidget
