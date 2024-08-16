import Link from "next/link";
import React from "react";
import { productsStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { converToLocalCurrency } from "@/utils/transform";
import Actions from "../actions/_Actions";
import AddToCart from "../actions/AddToCart";
import ShowProduct from "../actions/ShowProduct";
import Thumbnail from "./Thumbnail";

const Dish = ({ item, index }) => {
  const { select, } = productsStore(
    useShallow((s) => ({
      select: s.select,
      getProduct: s.getProduct,
      addToCart: s.addToCart,
    }))
  );
  return (
    <div className="flex flex-col gap-1">
      <div className="bg-white p-1 rounded thumbnail" onClick={() => select(index)}>
        <Thumbnail {...item} />
        {/* <img src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{converToLocalCurrency(price)}</div> */}
        <div className="caption mt-2 py-1">
          <div className="d-flex justify-content-between">
            <h4 className="font-semibold text-2xl">{item.name}</h4>
            <div className="float-end">
              <Actions >
                <ShowProduct id={index} />
                <AddToCart id={index} />
              </Actions>
            </div>
          </div>
          <p>{item.description}</p>
        </div>
      </div>

    </div>
  );
};

export default Dish;
