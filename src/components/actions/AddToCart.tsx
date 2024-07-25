import React from "react";
import Icon from "../UI/Icon";

const AddToCart = ({ action }) => {
  return (
    <button
      onClick={action}
      className="btn-md btn-info float-right"
      title="ajouter au panier"
    >
      <Icon name="plus" />
    </button>
  );
};

export default AddToCart;
