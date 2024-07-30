import React from "react";

const Update = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <h1>
          <strong>Modifier un produit</strong>
        </h1>
        <br />
        <form
          className="form"
          action="<?php echo 'update.php?id='.$id;?>"
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
            <span className="help-inline">
              {/* <?php echo $nameError;?> */}
            </span>
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
            <span className="help-inline">
              {/* <?php echo $priceError;?> */}
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="category">Catégorie:</label>
            <select className="form-control" id="category" name="category">
              {/* <?php
                   $db = Database::connect();
                   foreach ($db->query('SELECT * FROM categories') as $row) 
                   {
                        if($row['id'] == $category)
                            echo '<option selected="selected" value="'. $row['id'] .'">'. $row['name'] . '</option>';
                        else
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
            <label htmlFor="image">Image:</label>
            <p>{/* <?php echo $image;?> */}</p>
            <label htmlFor="image">Sélectionner une nouvelle image:</label>
            <input type="file" id="image" name="image" />
            <span className="help-inline">
              {/* <?php echo $imageError;?> */}
            </span>
          </div>
          <br />
          <div className="form-actions">
            <button type="submit" className="btn btn-success">
              <span className="glyphicon glyphicon-pencil"></span> Modifier
            </button>
            <a className="btn btn-primary" href="index.php">
              <span className="glyphicon glyphicon-arrow-left"></span> Retour
            </a>
          </div>
        </form>
      </div>
      <div className="col-sm-6 site">
        <div className="thumbnail">
          <img src="<?php echo '../images/'.$image;?>" alt="..." />
          <div className="price">
            {/* <?php echo number_format((float)$price, 2, '.', ''). ' €';?> */}
          </div>
          <div className="caption">
            <h4>{/* <?php echo $name;?> */}</h4>
            <p>{/* <?php echo $description;?> */}</p>
            <a href="#" className="btn btn-order" role="button">
              <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
              Commander
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
