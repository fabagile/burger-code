// import {image} from "/images/m1.png"
import Image from "next/image";
import React from "react";

const Dish = ({id,
  name,
  description,
  price,
  image,
  category}) => {
  return (
    // <div className="tab-content">
    //   <div className="tab-pane" id="1">
        
          <div className="col-sm-6 col-md-4">
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
        
    //   </div>
    // </div>
  );
};

export default Dish;
