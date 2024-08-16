
import { converToLocalCurrency } from "@/utils/transform";
import Actions from "../actions/_Actions";
import AddToCart from "../actions/AddToCart";
import GoTo from "../actions/_GoTo";
import { FaArrowLeft } from "react-icons/fa6";
import Thumbnail from "./Thumbnail";

const Detail = ({ item }) => {

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-6">
          <div className="caption">
            <div className="d-flex justify-content-between mb-3">
              <h4 className="font-semibold text-2xl" >{item.name}</h4>
              <div className="my-3 float-end">
                <Actions >
                  <AddToCart id={item.id} />
                  <GoTo url="/produits" color="info" title="retour à l'accueil">
                    <FaArrowLeft />
                  </GoTo>
                </Actions>
              </div>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <Thumbnail {...item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
