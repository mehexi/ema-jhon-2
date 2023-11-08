import React, { useEffect, useState } from "react";
import "./shopcontainer.css";
import Card from "../card/card";

const Shopcontainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="cardSection">
        <h1>cardSection</h1>
        <div className="cards">
          {items.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
      </div>
      <div className="order-section">
        <h1>orderSection</h1>
      </div>
    </div>
  );
};

export default Shopcontainer;
