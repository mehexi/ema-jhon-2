import React, { useEffect, useState } from "react";
import "./shopcontainer.css";
import Card from "../card/card";
import Cart from "../cart/Cart";
import { addToDb } from "../../utilities/fakedb";

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
      addToDb(props.id)
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
              addTocart={() => addTocart(item)}
            ></Card>
          ))}
        </div>
      </div>
      <div className="order-section">
               <Cart cartItem={carts} sellectedItem={carts.length}></Cart>
      </div>
    </div>
  );
};

export default Shopcontainer;
