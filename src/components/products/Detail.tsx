// import {image} from "/images/m1.png"
import { productsStore } from "@/store";
import Image from "next/image";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import Icon from "../UI/Icon";
import AddToCart from "../actions/AddToCart";
import { toLocalCurrency } from "@/utils/transform";
import Actions from "../layout/Actions";
import Button from "../actions/Button";
import Link from "next/link";

const Detail = ({ id, name, description, price, image }) => {
  const { select, getProduct, addToCart } = productsStore(
    useShallow((s) => ({
      select: s.select,
      getProduct: s.getProduct,
      addToCart: s.addToCart,
    }))
  );

  return (
    <div className="card">
      <div className="row">
      <div className="col-md-6">
          <div className="caption">
            <div className="d-flex justify-content-between mb-3">
              <h4>{name}</h4>
            <div className="my-3 float-end">
              <Actions btnSize="sm">
                <Button size="sm" btnColor="warning">
                  <Icon name="cart-plus" />
                </Button>
                <Link href="/" onClick={() => addToCart(id)}>
                  <Button size="sm" btnColor="info">
                    <Icon name="arrow-left" />
                  </Button>
                </Link>
              </Actions>
              {/* <a href="/products" className="btn-lg btn-info " role="button">
                <Icon name="home" />
                <span className="ps-3">Retour à l'accueil</span>
              </a> */}
            </div>
              {/* <div className="float-right"></div> */}
            </div>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <img src={`/images/${image}`} alt={`${name}`} />
            <div className="price">{toLocalCurrency(parseFloat(price))}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Detail;
