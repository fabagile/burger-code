import React from "react";
import Icon from "../UI/Icon";

const AddToCart = ({ action }) => {
  return (
    <button
      onClick={action}
      className="btn btn-sm btn-outline-dark bg-info float-end"
      title="ajouter au panier"
    >
      <Icon name="cart-plus" />
    </button>
  );
};

export default AddToCart;
