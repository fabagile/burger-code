"use client";
import Link from "next/link";
import { useEffect, useMemo } from "react";

import { links } from "./links";
import Button from "@/components/actions/Button";
import { productsStore } from "@/store";
import Actions from "../Actions";
import Icon from "@/components/UI/Icon";

const Navigation = () => {
  const { products, filterProducts, categories, category } = productsStore();
  useEffect(() => console.table(products), [products]);
  // const active = useMemo(()=> links.filter(link=> link.id==""))
  // console.log(category);

  return (
    <>
      <nav className="navbar">
        <ul className="nav nav-pills ">
          {categories.map(({ id, name }) => (
            <li
              role="presentation"
              key={id}
              className={`${id == category.id ? "active" : ""}`}
              // onClick={() => filterProducts(id)}
            >
              <Button
                onClick={() => filterProducts(id)}
                btnColor={"transparent"}
                title={name}
              >
                {name}
              </Button>
              {/* <Link onClick={()=> filterProducts(id)} href={`/products`}>{name}</Link> */}
            </li>
          ))}

          {/* $db = Database::connect();
                $statement = $db->query('SELECT * FROM categories');
                $categories = $statement->fetchAll();
                foreach ($categories as $category) 
                {
                    if($category['id'] == '1')
                        echo '<li role="presentation" className="active"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                    else
                        echo '<li role="presentation"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                }

                echo    ' */}
        </ul>
        {/* <div className="bg-light">
            <Actions>
              <Button btnColor="primary">
                <Icon name="plus" />
              </Button>
              <Button btnColor="primary" className="position-relative">
                <Icon name="cart" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-light">
                  {products.length}

                  <span className="visually-hidden">unread messages</span>
                </span>
              </Button>
            </Actions>
          </div> */}
      </nav>
    </>
  );
};

export default Navigation;

{
  /* <nav>
                        <ul className="nav nav-pills">';

                $db = Database::connect();
                $statement = $db->query('SELECT * FROM categories');
                $categories = $statement->fetchAll();
                foreach ($categories as $category) 
                {
                    if($category['id'] == '1')
                        echo '<li role="presentation" className="active"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                    else
                        echo '<li role="presentation"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                }

                echo    '</ul>
                      </nav> */
}
