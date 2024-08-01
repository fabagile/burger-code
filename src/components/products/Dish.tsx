import Link from "next/link";
// import Image from "next/image";
import React from "react";
import { productsStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { converToLocalCurrency } from "@/utils/transform";
import Icon from "../UI/Icon";
import Actions from "../actions/_Actions";
import Button from "../actions/_Button";
import AddToCart from "../actions/AddToCart";
import ShowProduct from "../actions/ShowProduct";
// import AddToCart from "../actions/AddToCart";

const Dish = ({ id, name, description, price, image }) => {
  const { select, getProduct, addToCart } = productsStore(
    useShallow((s) => ({
      select: s.select,
      getProduct: s.getProduct,
      addToCart: s.addToCart,
    }))
  );
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      {/* <Link href={`/products/${id}`}> */}
        <div className="thumbnail" onClick={() => select(id)}>
          <img src={`/images/${image}`} alt={`${name}`} />
          <div className="price">{converToLocalCurrency(price)}</div>
          <div className="caption">
            <div className="d-flex justify-content-between">
              <h4>{name}</h4>
              <div className="float-end">
                <Actions btnSize="sm">
                  <ShowProduct id={id} />
                  {/* <Button size="sm" outline btnColor="link">
                    <Link href={`/products/${id}`}>
                      <Icon name="eye" />
                    </Link>
                  </Button> */}
                  <AddToCart size="sm" id={id} />
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
