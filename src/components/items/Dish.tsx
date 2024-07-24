// import {image} from "/images/m1.png"
import { itemsStore } from "@/store";
import Image from "next/image";
import React from "react";
import { useShallow } from "zustand/react/shallow";

const Dish = ({ id, name, description, price, image }) => {
  const { select, getItem } = itemsStore(
    useShallow((s) => ({ select: s.select, getItem: s.getItem }))
  );
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail" onClick={() => select(id)}>
        <img src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{parseFloat(price).toFixed(2)} €</div>
        <div className="caption">
          <h4>{name}</h4>
          <p>{description}</p>
          <a href="/" className="btn btn-order" role="button">
            <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
            Commander
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dish;
