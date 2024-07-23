// import {image} from "/images/m1.png"
import Image from "next/image";
import React from "react";

const Detail = ({ name, description, price, image }) => {
  return (
    
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
    
  );
};

export default Detail;
