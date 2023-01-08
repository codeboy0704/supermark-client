/* eslint-disable no-unused-vars */
import { useState } from "react";
import Modal from "./Modal";

function ProductModal({ setModalState, saveProduct }) {
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
          left: "2px",
          top: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          setModalState((sta) => !sta);
        }}
      ></i>
      <h2>Add Product</h2>
      <form className="modal_details">
        <input
          type="text"
          value={productName}
          placeholder="Product name"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <input
          type="number"
          value={onStock}
          onChange={(e) => {
            setOnStock(e.target.value);
          }}
          placeholder="On Stock"
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Save
        </button>
      </form>
    </>
  );
}

function Products() {
  const [product, setProduct] = useState("");
  const [modalState, setModalState] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  // const saveProduct = async ({productInfo}) => {
  //   try {

  //   } catch (e) {
  //     console.error(e)
  //    }
  // };
  const products = [
    { name: "Milk", onStock: 3, lastPrice: 1.99 },
    { name: "Orange", onStock: 10, lastPrice: 1 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: `${1}L`, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Sugar", onStock: 3, lastPrice: 1.45 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
  ].sort((a, b) => a.lastPrice - b.lastPrice);

  const findProduct = (arr, product) => {
    const found = arr.filter((el) =>
      el.name.toLowerCase().includes(product.toLowerCase())
    );
    if (found) {
      console.log(found);
    } else {
      console.log("No product with this name");
    }
    setSearchResults(found);
  };
  function Table({ products }) {
    const names = products.map((el, index) => {
      return (
        <div className="item" key={index}>
          <h2>{el.name}</h2>
          <div className="options">
            <button>Details</button>
            <button>delete</button>
          </div>
        </div>
      );
    });
    const onStock = products.map((el, index) => {
      return (
        <div className="item" key={index}>
          <h2>{el.onStock}</h2>
        </div>
      );
    });
    const lastPrice = products.map((el, index) => {
      return (
        <div className="item" key={index}>
          <h2>${el.lastPrice}</h2>
        </div>
      );
    });

    return (
      <div className="table">
        <div className="products">
          <h2 className="table_title">Products</h2>
          {names}
        </div>
        <div className="stock">
          <h2 className="table_title">On Stock</h2>
          {onStock}
        </div>
        <div className="last_price">
          <h2 className="table_title">Last Price</h2>
          {lastPrice}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="products_container">
        <div className="search_cont">
          <input
            type="text"
            placeholder="Search"
            value={product}
            onChange={(e) => {
              setProduct(e.target.value.trim());
              findProduct(products, e.target.value.trim());
            }}
          />
          <button
            onClick={(e) => {
              setModalState((sta) => !sta);
            }}
          >
            +Add
          </button>
        </div>
        {searchResults.length ? (
          <Table products={searchResults} />
        ) : (
          <Table products={products} />
        )}
      </div>
      {modalState ? (
        <Modal>
          <ProductModal setModalState={setModalState}></ProductModal>
        </Modal>
      ) : null}
    </>
  );
}

export default Products;
