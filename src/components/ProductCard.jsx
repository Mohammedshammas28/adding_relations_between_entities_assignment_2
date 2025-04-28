import React from 'react'


function ProductCard({name,description,image,avgRating,totalRatings}) {

    return (
        <>
      <h3>Name:{name}</h3>
      <h3>Description:{description}</h3>
      <img src={image}  alt="Product image" width={200} />
      <h3>Avg Rating:{avgRating}</h3>
      <h3>Total Ratings:{totalRatings}</h3>
      </>
    )
  }
  

export default ProductCard
