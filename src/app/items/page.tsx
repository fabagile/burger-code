"use client";

import { itemsStore } from "@/store";
import React from "react";


const ItemPage = () => {
    // const router = useRouter()

  const items = itemsStore((s) => s.items);
  const { image, name, description, price } = items[2];
  return (<>
    <div className="jumbotron">
      <div className="thumbnail">
        <img src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{parseFloat(price).toFixed(2)} €</div>
        <div className="caption">
          <h4>{name}</h4>
          <p>{description}</p>
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
