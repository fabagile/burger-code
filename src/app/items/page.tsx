"use client";

import { itemsStore } from "@/store";
import React from "react";


const ItemPage = () => {
    // const router = useRouter()

  const getItem = itemsStore((s) => s.getItem);
  // const { image, name, description, price } = getItem;
  return (<>
    <div className="jumbotron">
      <div className="thumbnail">
        <img src={`/images/${getItem.image}`} alt={`${name}`} />
        <div className="price">{parseFloat(getItem.price).toFixed(2)} €</div>
        <div className="caption">
          <h4>{getItem.name}</h4>
          <p>{getItem.description}</p>
          <a href="#" className="btn btn-order" role="button">
            <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
            Commander
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ItemPage;
