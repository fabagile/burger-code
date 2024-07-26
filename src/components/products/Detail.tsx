// import {image} from "/images/m1.png"
import { productsStore } from "@/store";
import Image from "next/image";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import Icon from "../UI/Icon";
import AddToCart from "../actions/AddToCart";
import { toLocalCurrency } from "@/utils/transform";

const Detail = ({ id, name, description, price, image }) => {
  const { select, getProduct, addToCart } = productsStore(
    useShallow((s) => ({ select: s.select, 
      getProduct: s.getProduct,
      addToCart: s.addToCart,

     }))
  );

  return (
    <div className="card">
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="thumbnail">
            <img
              src={`/images/${image}`}
              alt={`${name}`}
            />
            <div className="price">{toLocalCurrency(parseFloat(price))}</div>
          </div>
        </div>
        <div className="col-sm-12 col-md-7">
          <div className="caption">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <AddToCart action={() => addToCart(id)} />
          </div>
            <p>{description}</p>
        <a href="/" className="btn-lg btn-order btn-block" role="button">
          <Icon name="shopping-cart" /> Commander
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
