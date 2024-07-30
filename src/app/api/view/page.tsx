import React from 'react'

const View = () => {
  return (
    <div className="row">
    <div className="col-sm-6">
         <h1><strong>Voir un produit</strong></h1>
         <br/>
         <form>
           <div className="form-group">
             <label>Nom:</label>{/* <?php echo '  '.$item['name'];?> */}
           </div>
           <div className="form-group">
             <label>Description:</label>{/* <?php echo '  '.$item['description'];?> */}
           </div>
           <div className="form-group">
             <label>Prix:</label>{/* <?php echo '  '.number_format((float)$item['price'], 2, '.', ''). ' €';?> */}
           </div>
           <div className="form-group">
             <label>Catégorie:</label>{/* <?php echo '  '.$item['category'];?> */}
           </div>
           <div className="form-group">
             <label>Image:</label>{/* <?php echo '  '.$item['image'];?> */}
           </div>
         </form>
         <br/>
         <div className="form-actions">
           <a className="btn btn-primary" href="index.php"><span className="glyphicon glyphicon-arrow-left"></span> Retour</a>
         </div>
     </div> 
     <div className="col-sm-6 site">
         <div className="thumbnail">
             <img src="<?php echo '../images/'.$item['image'];?>" alt="..."/>
             <div className="price">{/* <?php echo number_format((float)$item['price'], 2, '.', ''). ' €';?> */}</div>
               <div className="caption">
                 <h4>{/* <?php echo $item['name'];?> */}</h4>
                 <p>{/* <?php echo $item['description'];?> */}</p>
                 <a href="#" className="btn btn-order" role="button"><span className="glyphicon glyphicon-shopping-cart"></span> Commander</a>
               </div>
         </div>
     </div>
 </div>
  )
}

export default View