import React, { useEffect, useState } from "react";
import "./shopcontainer.css";
import Card from "../card/card";

const Shopcontainer = () => {
  const [items, setItems] = useState([]);
  const [carts, setcart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
    
  const addTocart = (props) => {
      const newCart = [...carts, props]
      setcart(newCart)
  };

  return (
    <div className="shop-container">
      <div className="cardSection">
        {/* <h1>cardSection</h1> */}
        <div className="cards">
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              addTocart={() => addTocart(item.id)}
            ></Card>
          ))}
        </div>
      </div>
      <div className="order-section">
              <h1>orderSection</h1>
              <p>selected items: {carts.length}</p>
      </div>
    </div>
  );
};

export default Shopcontainer;
