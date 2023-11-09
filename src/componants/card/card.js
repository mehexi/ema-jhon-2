import React from "react";
import "./card.css";
// import { addtodb } from "../Database/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { id, name, seller, price, img, ratings } = props.item;
  const addTocart = props.addTocart;

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
        <button className="btn" onClick={() => addTocart(id)}>
          add to cart{" "}
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Card;
