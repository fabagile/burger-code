import BackToAdminPage from "@/components/actions/BackToAdminPage";
import React from "react";

const Insert = () => {
  return (
    <div className="row">
      <h1>
        <strong>Ajouter un produit</strong>
      </h1>
      <br />
      <form
        className="form"
        action="insert.php"
        role="form"
        method="post"
        encType="multipart/form-data"
      >
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Nom"
            value="<?php echo $name;?>"
          />
          <span className="help-inline">{/* <?php echo $nameError;?> */}</span>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            value="<?php echo $description;?>"
          />
          <span className="help-inline">
            {/* <?php echo $descriptionError;?> */}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="price">Prix: (en €)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            name="price"
            placeholder="Prix"
            value="<?php echo $price;?>"
          />
          <span className="help-inline">{/* <?php echo $priceError;?> */}</span>
        </div>
        <div className="form-group">
          <label htmlFor="category">Catégorie:</label>
          <select className="form-control" id="category" name="category">
            {/* <?php
                           $db = Database::connect();
                           foreach ($db->query('SELECT * FROM categories') as $row) 
                           {
                                echo '<option value="'. $row['id'] .'">'. $row['name'] . '</option>';;
                           }
                           Database::disconnect();
                        ?> */}
          </select>
          <span className="help-inline">
            {/* <?php echo $categoryError;?> */}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="image">Sélectionner une image:</label>
          <input type="file" id="image" name="image" />
          <span className="help-inline">{/* <?php echo $imageError;?> */}</span>
        </div>
        <br />
        <div className="form-actions">
          <button type="submit" className="btn btn-success">
            <span className="glyphicon glyphicon-pencil"></span> Ajouter
          </button>
          <BackToAdminPage/>
        </div>
      </form>
    </div>
  );
};

export default Insert;
