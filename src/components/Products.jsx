/* eslint-disable no-unused-vars */
import { useState } from "react";

function Products() {
  const [product, setProduct] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const products = [
    { name: "Milk", onStock: 3, lastPrice: 1.99 },
    { name: "Orange", onStock: 10, lastPrice: 1 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
    { name: "Cheese", onStock: 3, lastPrice: 1.99 },
  ];

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
    const names = products.map((el) => {
      return (
        <div className="item">
          <h2>{el.name}</h2>
          <div className="options">
            <button>Details</button>
            <button>delete</button>
          </div>
        </div>
      );
    });
    const onStock = products.map((el) => {
      return (
        <div className="item">
          <h2>{el.onStock}</h2>
        </div>
      );
    });
    const lastPrice = products.map((el) => {
      return (
        <div className="item">
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
        <button>+Add</button>
      </div>
      {searchResults.length ? (
        <Table products={searchResults} />
      ) : (
        <Table products={products} />
      )}
    </div>
  );
}

export default Products;
