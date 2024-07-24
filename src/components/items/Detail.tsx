// import {image} from "/images/m1.png"
import { itemsStore } from "@/store";
import Image from "next/image";
import React from "react";
import { useShallow } from "zustand/react/shallow";

const Detail = ({ id, name, description, price, image }) => {
  const { select, getItem } = itemsStore(
    useShallow((s) => ({ select: s.select, getItem: s.getItem }))
  );

  return (
    <div className="container">

    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <Image width={300 } height={300  } src={`/images/${image}`} alt={`${name}`} />
        <div className="price">{parseFloat(price).toFixed(2)} €</div>
        </div>
      </div>
      <div className="col-sm-6 col-md-8">
        <div className="caption">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
          <a href="/" className="btn-lg btn-order" role="button">
            <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
            Commander
          </a>
    </div>
    </div>
    
  );
};

export default Detail;
