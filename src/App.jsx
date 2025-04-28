import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import RatingWidget from "./components/RatingWidget";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15,
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8,
  },
];

function App() {

  const [Product,setProduct]=useState(initialProducts)

  const updaterate=(ProductId,rating)=>{
       const updatedrating= Product.map((ele)=>{
        if(ele.id==ProductId){
          ele.totalRatings=ele.totalRatings+1;
          ele.avgRating=(ele.avgRating+rating)/2
        }
        return ele;
       })
       console.log(updatedrating)
       setProduct(updatedrating)
  }

  

  return (
    <div className="">
      {Product.map((item) => (
        <div>
          <ProductCard
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            avgRating={item.avgRating}
            totalRatings={item.totalRatings}
          />
          <RatingWidget id={item.id} updaterate={updaterate}/>
        </div>
      ))}
    </div>
  );
}

export default App;
