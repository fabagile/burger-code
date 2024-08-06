import Link from "next/link";
import React from "react";
import { productsStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { converToLocalCurrency } from "@/utils/transform";
import Actions from "../actions/_Actions";
import AddToCart from "../actions/AddToCart";
import ShowProduct from "../actions/ShowProduct";

const Dish = ({ name, description, price, image, index }) => {
  const { select, } = productsStore(
    useShallow((s) => ({
      select: s.select,
      getProduct: s.getProduct,
      addToCart: s.addToCart,
    }))
  );
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="thumbnail" onClick={() => select(index)}>
        <img src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{converToLocalCurrency(price)}</div>
        <div className="caption">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <div className="float-end">
              <Actions >
                <ShowProduct id={index} />
                <AddToCart id={index} />
              </Actions>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>

    </div>
  );
};

export default Dish;
