// import {image} from "/images/m1.png"
import { productsStore } from "@/store";
import Image from "next/image";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import AddToCart from "../actions/AddToCart";
import Icon from "../UI/Icon";
import { toLocalCurrency } from "@/utils/transform";

const Dish = ({ id, name, description, price, image }) => {
  const { select, getProduct, addToCart } = productsStore(
    useShallow((s) => ({
      select: s.select,
      getProduct: s.getProduct,
      addToCart: s.addToCart,
    }))
  );
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail" onClick={() => select(id)}>
        <img src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{toLocalCurrency(price)}</div>
        <div className="caption">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <AddToCart action={() => addToCart(id)} />
          </div>
          <p>{description}</p>
          <a href={`/products/${id}`} className="btn btn-order" role="button">
            <Icon name="eye" /><span className="ps-3">Voir le détail</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dish;
