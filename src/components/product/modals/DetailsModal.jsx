import { useState } from "react";
import Modal from "../../Modal";
export default function DetailsModal({ details, detailsState }) {
  const [name, setname] = useState(details.name);
  const [stock, setstock] = useState(details.stock.quantity);
  const [price, setPrice] = useState(details.lastPrice);
  console.log(details);
  return (
    <Modal>
      <i
        className="bx bx-x-circle"
        style={{
          color: "#fff",
          fontSize: "2rem",
          position: "fixed",
          left: "0.5rem",
          top: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          detailsState((sta) => !sta);
        }}
      ></i>
      <div className="details_container">
        <div>
          <h2>Product: {details.name}</h2>
        </div>
        <div>
          <p>On Stock:</p>
          <input readOnly value={stock} />
        </div>
        <div>
          <p>Last Price:</p>
          <input readOnly value={`$${price}`} />
        </div>
        <div>
          <button>Save</button>
        </div>
      </div>
    </Modal>
  );
}
