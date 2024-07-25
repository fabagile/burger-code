'use client'

import { ReactNode, useMemo } from "react";
import { productsStore } from "@/store";

import { useShallow } from "zustand/react/shallow";
import Icon from "../UI/Icon";
import AddToCart from "../actions/AddToCart";

type CardType = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  mode: string;
//   children: ReactNode;
};

type RowType = {
  children: ReactNode;
};

const Row = ({ children }: RowType) => {
  return <div className="row">{children}</div>;
};

function Thumbnail() {
  return {};
}

const Card = ({
  id,
  name,
  description,
  price,
  image,
  mode = "single",
}: CardType) => {
  const { select, getProduct, addToCart } = productsStore(
    useShallow((s) => ({
      select: s.select,
      getProduct: s.getProduct,
      addToCart: s.addToCart,
    }))
  );
  const columnClasses = useMemo(()=> mode==="single" ?"col-sm-12 col-md-12" :"col-sm-6 col-md-6", [mode]) 
  return (
    <div className="card">
      <div className="row">
        <div className={columnClasses}>
          <div className="thumbnail" onClick={() => select(id)}>
            <img src={`/images/${image}`} alt={`${name}`} />
            <div className="price">{parseFloat(price).toFixed(2)} €</div>
          </div>
        </div>

        <div className={columnClasses}>
          <div className="caption">
            <div className="flex">
              <h4>{name}</h4>
              <AddToCart action={() => addToCart(id)} />
            </div>
            <p>{description}</p>
            <a href="/" className="btn btn-order" role="button">
              <Icon name="shopping-cart" /> Commander
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  //   return mode === "single" ? (
  //     <div className="col-sm-6 col-md-4">
  //       <div className="thumbnail" onClick={() => select(id)}>
  //         <img src={`/images/${image}`} alt={`${name}`} />
  //         <div className="price">{parseFloat(price).toFixed(2)} €</div>
  //         <div className="caption">
  //           <h4>{name}</h4>
  //           <AddToCart action={() => addToCart(id)} />
  //           <p>{description}</p>
  //           <a href="/" className="btn btn-order" role="button">
  //             <Icon name="shopping-cart" /> Commander
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   ) : (
  //     <div className="container">
  //       <Row>
  //         <div className="col-sm-6 col-md-4">
  //           <div className="thumbnail">
  //             <img src={`/images/${image}`} alt={`${name}`} />
  //             <div className="price">{parseFloat(price).toFixed(2)} €</div>
  //           </div>
  //         </div>
  //         <div className="col-sm-6 col-md-8">
  //           <div className="caption">
  //             <h4>{name}</h4>
  //             <p>{description}</p>
  //           </div>
  //         </div>
  //         <a href="/" className="btn-lg btn-order" role="button">
  //           <Icon name="shopping-cart" /> Commander
  //         </a>
  //       </Row>
  //     </div>
  //   );
};

export default Card;
