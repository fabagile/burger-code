"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/actions/_Button";
import { productsStore } from "@/store";
import Actions from "@/components/actions/_Actions";
import BackHome from "@/components/actions/Back";
import ShowCart from "@/components/actions/ShowCart";

const Navigation = () => {
  const { products, filterProducts, categories, category, cart } =
    productsStore();
  useEffect(() => console.table(products), [products]);
  const router = useRouter();
  useEffect(() => console.log(window.history), []);

  return (
    <nav className="container-fluid mb-4">
      <div className=" d-flex justify-content-betwwen">
        <div></div>
        <ul className="nav nav-pills flex-1">
          {categories.map(({ id, name }) => (
            <li
              role="presentation"
              key={id}
              className={`${id == category.id ? "active" : ""}`}
            >
              <Button
                onClick={() => filterProducts(id)}
                btnColor={"transparent"}
                title={name}
              >
                {name}
              </Button>
            </li>
          ))}
        </ul>

        <Actions btnSize='lg'>
          <BackHome />
          <ShowCart />
        </Actions>
      </div>
    </nav>
  );
};

export default Navigation;
