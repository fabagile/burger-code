
import { converToLocalCurrency } from "@/utils/transform";
import Actions from "../actions/_Actions";
import AddToCart from "../actions/AddToCart";
import GoTo from "../actions/_GoTo";
import { FaArrowLeft } from "react-icons/fa6";

const Detail = ({ id, name, description, price, image }) => {

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-6">
          <div className="caption">
            <div className="d-flex justify-content-between mb-3">
              <h4>{name}</h4>
              <div className="my-3 float-end">
                <Actions >
                  <AddToCart id={id} />
                  <GoTo url="/products" color="info" title="retour à l'accueil">
                    <FaArrowLeft />
                  </GoTo>
                </Actions>
              </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <img src={`/images/${image}`} alt={`${name}`} />
            <div className="price">
              {converToLocalCurrency(parseFloat(price))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
