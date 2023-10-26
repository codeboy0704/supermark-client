/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect, useState, lazy, Suspense, createContext } from "react";
import "./App.css";
import "./components/budget/budget.css";
import "./components/menu/menu.css"
import { UserContext } from "./context/UserContext";
import ProductDetailsContext from "./context/ProductDetailsContext";
import { getUSerLocationData } from "./utils/getUserLocationData";
import LocationInfoContext from "./context/LocationInfoContext";
import MainLogo from "./components/MainLogo";
import Navigation from "./components/Navigation";
import Dashboard from "./components/admin/Dashboard";
const Home = lazy(() => import("./components/Home/Home"));
const Form = lazy(() => import("./components/Form"));
const validation = lazy(() => import("./validations/signUp.validation"));
const Login = lazy(() => import("./components/Login.jsx"));
const redirect = lazy(() => import("./utils/redirect"))
const Products = lazy(() => import("./components/product/Products.jsx"));
const Personal = lazy(() => import("./components/Personal"));
const Budget = lazy(() => import("./components/budget/Budget"));
const CanastaBasica = lazy(() => import("./components/budget/cbasica/CanastaBasica"));
const GetProductsInformation = lazy(() => import("./components/budget/cbasica/services/getProductsInformation"));
const ProductDetails = lazy(() => import("./components/budget/cbasica/ProductDetails"));
const OpcionesCanastaBasica = lazy(() => import("./components/budget/cbasica/Opciones"))
function App() {
  const [geolocation, setGeoLocation] = useState({ latitude: null, longitude: null });
  const [productDetails, setProductDetails] = useState({});
  const { user, login } = useContext(UserContext);

  useEffect(() => {
    getUSerLocationData(setGeoLocation)
  }, [])

  return (
    <ProductDetailsContext.Provider value={productDetails}>
      <LocationInfoContext.Provider value={geolocation}>
        <div className="app_container">
          <MainLogo />
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Form />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/pla/cbasica" element={<OpcionesCanastaBasica />} />
              <Route path="/pla/cbasica/bylocation" element={<CanastaBasica setProductDetails={setProductDetails} />} />
              <Route path="/budget/pla/cbasica/bylocation/:id" element={<ProductDetails setProductDetails={setProductDetails} />} />
              <Route
                path="/account:id"
                element={user ? <Personal data={user} /> : null}
              />
              <Route
                path="/dashboard:id"
                element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </LocationInfoContext.Provider>
    </ProductDetailsContext.Provider>
  );
}

export default App;
