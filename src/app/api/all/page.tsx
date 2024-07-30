'use client'

import { productsStore } from '@/store'
import { converToLocalCurrency } from '@/utils/transform'
import React from 'react'

const All = () => {
    const {all} = productsStore()
  return (
    <div className="row">
                <h1><strong>Liste des produits   </strong><a href="insert.php" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-plus"></span> Ajouter</a></h1>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Description</th>
                      <th>Prix</th>
                      <th>Catégorie</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{all.map(item=> (
                 <tr key={item.id}>
<td>{item.name}</td>
<td>{item.description}</td>
<td>{converToLocalCurrency(item.price)}</td>
<td>{item.category}</td>
<td width="300">
<a className="btn btn-default" href="view.php?id='.$item['id'].'"><span className="glyphicon glyphicon-eye-open"></span> Voir</a>
 
<a className="btn btn-primary" href="update.php?id='.$item['id'].'"><span className="glyphicon glyphicon-pencil"></span> Modifier</a>
 
<a className="btn btn-danger" href="delete.php?id='.$item['id'].'"><span className="glyphicon glyphicon-remove"></span> Supprimer</a>
</td>
</tr>   
                  ))}
                  
                      {/* <?php
                        require 'database.php';
                        $db = Database::connect();
                        $statement = $db->query('SELECT items.id, items.name, items.description, items.price, categories.name AS category FROM items LEFT JOIN categories ON items.category = categories.id ORDER BY items.id DESC');
                        while($item = $statement->fetch()) 
                        {
                            echo '<tr>';
                            echo '<td>'. $item['name'] . '</td>';
                            echo '<td>'. $item['description'] . '</td>';
                            echo '<td>'. number_format($item['price'], 2, '.', '') . '</td>';
                            echo '<td>'. $item['category'] . '</td>';
                            echo '<td width=300>';
                            echo '<a className="btn btn-default" href="view.php?id='.$item['id'].'"><span className="glyphicon glyphicon-eye-open"></span> Voir</a>';
                            echo ' ';
                            echo '<a className="btn btn-primary" href="update.php?id='.$item['id'].'"><span className="glyphicon glyphicon-pencil"></span> Modifier</a>';
                            echo ' ';
                            echo '<a className="btn btn-danger" href="delete.php?id='.$item['id'].'"><span className="glyphicon glyphicon-remove"></span> Supprimer</a>';
                            echo '</td>';
                            echo '</tr>';
                        }
                        Database::disconnect();
                      ?> */}
                  </tbody>
                </table>
            </div>
        // </div>
  )
}

export default All