"use client";

import Icon from "@/components/UI/Icon";
import { productsStore } from "@/store";
import { toLocalCurrency } from "@/utils/transform";
import React from "react";

const ProductPage = () => {
  const getProduct = productsStore((s) => s.getProduct);

  return (
    <>
      <div className="jumbotron">
        <div className="thumbnail">
          <img src={`/images/${getProduct.image}`} alt={`${name}`} />
          <div className="price">
            {toLocalCurrency(getProduct.price)}
          </div>
          <div className="caption">
            <h4>{getProduct.name}</h4>
            <p>{getProduct.description}</p>
            <a href="#" className="btn btn-order" role="button">
              <Icon name="shopping-cart" /> Commander
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
