// import {image} from "/images/m1.png"
import { productsStore } from "@/store";
import Image from "next/image";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import AddToCart from "../actions/AddToCart";
import Icon from "../UI/Icon";
import { toLocalCurrency } from "@/utils/transform";
import Link from "next/link";
import Actions from "../layout/Actions";
import Button from "../actions/Button";

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
      <Link href={`/products/${id}`}>
        <div className="thumbnail" onClick={() => select(id)}>
          <img src={`/images/${image}`} alt={`${name}`} />
          <div className="price">{toLocalCurrency(price)}</div>
          <div className="caption">
            <div className="d-flex justify-content-between">
              <h4>{name}</h4>
              <div className="float-end">
                <Actions btnSize="sm">
                  <Button size="sm" outline btnColor="link">
                    <Link href={`/products/${id}`}>
                      <Icon name="eye" />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => addToCart(id)}
                    btnColor="warning"
                  >
                    <Icon name="cart-plus" />
                  </Button>
                  {/* <AddToCart  /> */}
                  {/* <span className="ps-3">Voir le détail</span> */}
                </Actions>
              </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dish;
