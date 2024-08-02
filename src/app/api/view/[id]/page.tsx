"use client";

import BackToAdminPage from "@/components/actions/BackToAdminPage";
import { productsStore } from "@/store";
import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

// type CompType = {
//   params:
// }

const ViewApiProduct = ({ params }) => {
  const { all } = productsStore();
  const item = all[params.id];
  console.log(JSON.stringify(item));
  // const
  return (
    <>
      <div></div>
      <div className="row">
        <div className="col-sm-6">
          <h1>
            <strong>Voir {item.name}</strong>
          </h1>
          <br />
          <form>
            <div className="form-group">
              <label>Nom:</label>
              {/* <?php echo '  '.$item['name'];?> */}
            </div>
            <div className="form-group">
              <label>Description:</label>
              {/* <?php echo '  '.$item['description'];?> */}
            </div>
            <div className="form-group">
              <label>Prix:</label>
              {/* <?php echo '  '.number_format((float)$item['price'], 2, '.', ''). ' €';?> */}
            </div>
            <div className="form-group">
              <label>Catégorie:</label>
              {/* <?php echo '  '.$item['category'];?> */}
            </div>
            <div className="form-group">
              <label>Image:</label>
              {/* <?php echo '  '.$item['image'];?> */}
            </div>
          </form>
          <br />
          <div className="form-actions">
            <BackToAdminPage />
          </div>
        </div>
        <div className="col-sm-6 site">
          <div className="thumbnail">
            <img src="<?php echo '../images/'.$item['image'];?>" alt="..." />
            <div className="price">
              {/* <?php echo number_format((float)$item['price'], 2, '.', ''). ' €';?> */}
            </div>
            <div className="caption">
              <h4>{/* <?php echo $item['name'];?> */}</h4>
              <p>{/* <?php echo $item['description'];?> */}</p>
              <a href="#" className="btn btn-order" role="button">
                <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                Commander
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewApiProduct;
