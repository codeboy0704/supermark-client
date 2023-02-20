/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import React from "react";
import Select from "react-select";
import Modal from "./Modal";
import Add from "../images/add-new.svg";
import Search from "../images/search_item.svg";

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

function getProducts({ options }) {
  const products = [
    { name: "Milk", stock: { state: false, quantity: 0 }, lastPrice: 1.99 },
    { name: "Orange", stock: { state: true, quantity: 10 }, lastPrice: 1 },
    { name: "Cheese", stock: { state: true, quantity: 5 }, lastPrice: 1.99 },
    { name: "Cheese", stock: { state: false, quantity: 0 }, lastPrice: 1.99 },
    { name: "Cheese", stock: { state: false, quantity: 0 }, lastPrice: 1.99 },
    { name: "Cheese", stock: { state: true, quantity: 2 }, lastPrice: 1.99 },
    { name: "Sugar", stock: { state: true, quantity: 5 }, lastPrice: 1.45 },
    { name: "Cheese", stock: { state: true, quantity: 2 }, lastPrice: 1.99 },
    { name: "Cheese", stock: { state: true, quantity: 4 }, lastPrice: 1.99 },
  ].sort((a, b) => a.lastPrice - b.lastPrice);
  if (options.all) {
    return products;
  }
  if (options.stock) {
    return products.filter((product) => {
      return product.stock.state === true;
    });
  }
  if (!options.stock) {
    return products.filter((product) => {
      return product.stock.state === false;
    });
  }
}

function Products() {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const selectOptions = [
    { value: "all", label: "All" },
    { value: "onStock", label: "In Stock" },
    { value: "outOfStock", label: "Out of Stock" },
  ];
  const [selectedOption, setSelectedOption] = useState(selectOptions[0]);
  const handleOnChange = (selectOption) => {
    return setSelectedOption(selectOption);
  };

  useEffect(() => {
    const handleProducts = () => {
      const option =
        selectedOption.value == "onStock"
          ? { stock: true }
          : selectedOption.value == "outOfStock"
          ? { stock: false }
          : { all: true };
      const products = getProducts({ options: option });
      setProducts(products);
    };
    handleProducts();
  }, [selectedOption]);

  function Table({ products }) {
    const map = products.map((el) => {
      return (
        <>
          <h2>{el.name}</h2>
        </>
      );
    });
    return <div className="table_container">{map}</div>;
  }

  return (
    <>
      <div className="products_container">
        <div className="products_main">
          <h2>Inventory</h2>
          <div className="search_cont">
            <span>
              <img className="search_icon" src={Search} alt="" />
            </span>
            <input
              type="text"
              placeholder="     Search"
              value={product}
              onChange={(e) => {
                setProduct(e.target.value.trim());
                findProduct(products, e.target.value.trim());
              }}
            />
          </div>
          <button
            className="add_icon_container"
            onClick={(e) => {
              setModalState((sta) => !sta);
            }}
          >
            <picture>
              <img src={Add} alt="" />
            </picture>
          </button>
        </div>
      </div>
      <div className="options_container">
        <Select
          theme={{
            colors: {
              primary: "#5c56d1",
              primary25: "rgb(53 50 100)",
            },
          }}
          value={selectedOption}
          onChange={handleOnChange}
          options={selectOptions}
        />
        <Table products={products} />
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
