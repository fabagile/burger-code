// import {image} from "/images/m1.png"
import { itemsStore } from "@/store";
import Image from "next/image";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import AddToCart from "../actions/AddToCart";
import Icon from "../UI/Icon";

const Dish = ({ id, name, description, price, image }) => {
  const { select, getItem, addToCart } = itemsStore(
    useShallow((s) => ({
      select: s.select,
      getItem: s.getItem,
      addToCart: s.addToCart,
    }))
  );
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail" onClick={() => select(id)}>
        <img src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{parseFloat(price).toFixed(2)} €</div>
        <div className="caption">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <AddToCart action={() => addToCart(id)} />
          </div>
          <p>{description}</p>
          <a href="/" className="btn btn-order" role="button">
            <Icon name="shopping-cart" /> Commander
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dish;
