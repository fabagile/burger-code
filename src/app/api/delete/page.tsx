import React from "react";

const Delete = () => {
  return (
    <div className="row">
      <h1>
        <strong>Supprimer un produit</strong>
      </h1>
      <br />
      <form className="form" action="delete.php" role="form" method="post">
        <input type="hidden" name="id" value="<?php echo $id;?>" />
        <p className="alert alert-warning">
          Etes-vous sur de vouloir supprimer ?
        </p>
        <div className="form-actions">
          <button type="submit" className="btn btn-warning">
            Oui
          </button>
          <a className="btn btn-default" href="index.php">
            Non
          </a>
        </div>
      </form>
    </div>
  );
};

export default Delete;
