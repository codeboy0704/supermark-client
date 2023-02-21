/* eslint-disable no-unused-vars */
import "./product.css";
import { useEffect, useState } from "react";
import React from "react";
import Select from "react-select";
import Modal from "../Modal";
import Add from "../../images/add-new.svg";
import Search from "../../images/search_item.svg";
import Table from "./Table";
import ProductModal from "./ProductModal";
import getProducts from "./getProducts";

function Products() {
  const selectOptions = [
    { value: "all", label: "All" },
    { value: "onStock", label: "In Stock" },
    { value: "outOfStock", label: "Out of Stock" },
  ];
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState(selectOptions[0]);
  const handleOnChange = (selectOption) => {
    return setSelectedOption(selectOption);
  };
  const handleOnSearch = ({ products, productName }) => {
    const results = products.filter((el) => {
      return el.name.toLowerCase().includes(productName.toLowerCase());
    });
    return setSearchResults(results);
  };
  const handleProducts = () => {
    const option =
      selectedOption.value == "onStock"
        ? { stock: true }
        : selectedOption.value == "outOfStock"
        ? { stock: false }
        : { all: true };
    const products = getProducts({ options: option });
    setProducts(products);
    setSearchResults([]);
    return products;
  };

  useEffect(() => {
    handleProducts();
    setProduct("");
  }, [selectedOption]);

  useEffect(() => {
    handleOnSearch({ products, productName: product });
  }, [product]);
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
        {searchResults.length ? (
          <Table products={searchResults} />
        ) : (
          <Table products={products} />
        )}
      </div>
      {modalState ? (
        <Modal>
          <ProductModal setModalState={setModalState} />{" "}
        </Modal>
      ) : null}
    </>
  );
}

export default Products;
