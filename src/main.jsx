// eslint-disable-next-line no-unused-vars
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
