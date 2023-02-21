export default function getProducts({ options }) {
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
