import React from "react";
import "./card.css";

const Card = (props) => {
    const { id, catagory, name, seller, price, img, ratings } = props.item;
    
    const addTocart = (props) => {
        console.log(props)
    } 

  return (
    <div className="card">
      <div className="img-container">
        <img className="img" src={img} alt="" />
      </div>
      <div className="item-display">
        <h1 className="item-name">{name}</h1>
        <h1 className="item-price">Price: {price} /-</h1>
        <p>manufature: {seller}</p>
        <p>rating: {ratings} </p>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={()=> addTocart(id)}>add To cart <span><i class="fa-solid fa-cart-plus"></i></span> </button>
      </div>
    </div>
  );
};

export default Card;
