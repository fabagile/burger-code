"use client";

import BackHome from "@/components/actions/Back";
import { productsStore } from "@/store";
import { converToLocalCurrency } from "@/utils/transform";
import Link from "next/link";
import React from "react";
import { FaEraser, FaEye, FaHouse, FaPencil, FaPlus } from "react-icons/fa6";
import Insert from "../insert/page";
import AddProduct from "@/components/actions/AddProduct";
import GoTo from "@/components/actions/_GoTo";

const All = () => {
  const { all } = productsStore();
  return (
    <div className="row">
      <h2 className="d-flex gap-3">
        <strong>Liste des produits </strong>
        <div className="d-flex gap-1">
          <GoTo url="/api/insert" color="success" title="ajouter un produit">
            <FaPlus />
          </GoTo>
          <GoTo url="/products" color="info" title="retour à l'accueil">
            <FaHouse />
          </GoTo>
          {/* <BackHome /> */}
        </div>
        <div className="d-flex gap-3">
          <Link href="/api/insert">
            <div className="d-flex gap-2 align-items-center"></div>
          </Link>
        </div>
      </h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="text-center">Nom</th>
            <th className="text-center">Description</th>
            <th className="text-center">Prix</th>
            <th className="text-center">Catégorie</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {all.map((item, index) => (
            <tr key={index} className="">
              <td className="ps-3">{item.name}</td>
              <td className="ps-3">{item.description}</td>
              <td className="text-right pe-3">
                {converToLocalCurrency(item.price)}
              </td>
              <td className="ps-3">{item.category}</td>
              <td width="300">
                <a
                  className="btn btn-default"
                  href={`/api/view/${index}`}
                  title={`Voir ${item.name}`}
                >
                  <FaEye />
                </a>

                <a
                  className="btn btn-primary"
                  href={`/api/update/${index}`}
                  title={`Modifier ${item.name}`}
                >
                  <FaPencil />
                </a>

                <a
                  className="btn btn-danger"
                  href={`/api/delete/${index}`}
                  title={`Supprimer ${item.name}`}
                >
                  <FaEraser />
                </a>
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
  );
};

export default All;
