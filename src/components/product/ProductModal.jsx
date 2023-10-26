import { useState } from "react";
import Modal from "../OldModal";
export default function ProductModal({ setModalState }) {
  const [productName, setProductName] = useState("");
  const [onStock, setOnStock] = useState(0);
  return (
    <>
      <i
        className="bx bx-x-circle"
        style={{
          color: "#fff",
          fontSize: "2rem",
          position: "fixed",
          left: "7px",
          top: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          setModalState((sta) => !sta);
        }}
      ></i>
      <div className="add_product_container">
        <div>
          <h2>Add Product</h2>
        </div>
        <form className="modal_details">
          <div>
            <p>Product Name:</p>
            <input
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          <div>
            <p>On Stock:</p>
            <input
              type="number"
              value={onStock}
              onChange={(e) => {
                setOnStock(e.target.value);
              }}
              placeholder="On Stock"
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
