import React from "react";
// import Icon from "../UI/Icon";
import Button from "./_Button";
import { productsStore } from "@/store";
import { FaCartPlus } from "react-icons/fa6";

const AddToCart = ({ size = "md", id }) => {
  const { addToCart } = productsStore();
  return (
    <>
      <Button size={size} onClick={() => addToCart(id)} btnColor="warning">
        <FaCartPlus />
        {/* <Icon name="cart-plus" /> */}
      </Button>
      {/* <button
      onClick={onClick}
      className="btn btn-sm btn-outline-dark bg-info float-end"
      title="ajouter au panier"
    >
      <Icon name="cart-plus" />
    </button> */}
    </>
  );
};

export default AddToCart;
