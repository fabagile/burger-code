// import {image} from "/images/m1.png"
import Image from "next/image";
import React from "react";

const DishClone = () => {
  return (
    // <div className="tab-content">
    //   <div className="tab-pane" id="1">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="/images/m1.png" alt="..." />
              <div className="price">12.90 €</div>
              <div className="caption">
                <h4>Menu</h4>
                <p>Description</p>
                <a href="#" className="btn btn-order" role="button">
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Commander
                </a>
                
              </div>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default DishClone;
