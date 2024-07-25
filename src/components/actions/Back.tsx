import React from "react";
import Icon from "../UI/Icon";

const AddToCart = ({ action }) => {
  return (
    <button
      onClick={action}
      className="btn btn-sm btn-outline-dark bg-info float-end"
      title="Retour à l'accueil"
    >
      <Icon name="close" />
    </button>
  );
};

export default AddToCart;
