import { useState } from "react";
import DetailsModal from "./modals/DetailsModal";
import "./product.css";
function Table({ products }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [details, setDetails] = useState({});
  const map = products.map((el, index) => {
    return (
      <div className="product_card" key={index}>
        <div>
          <h3>Product: {el.name}</h3>
        </div>
        <div className="btn_container">
          <button
            onClick={() => {
              setShowDetails(true);
              setDetails(el);
            }}
          >
            Details
          </button>
          <button
            onClick={() => {
              setShowDelete(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      {showDetails ? (
        <DetailsModal details={details} detailsState={setShowDetails} />
      ) : null}
      <div className="table_container">{map}</div>
    </>
  );
}

export default Table;
