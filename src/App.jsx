/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect, useState, lazy, Suspense, createContext } from "react";
import "./App.css";
import "./components/budget/budget.css";
import "./components/menu/menu.css"

import ProductDetailsContext from "./context/ProductDetailsContext";
import { getUSerLocationData } from "./utils/getUserLocationData";
import LocationInfoContext from "./context/LocationInfoContext";
import MainLogo from "./components/MainLogo";
import Dashboard from "./components/admin/Dashboard";
import Cookies from "js-cookie";
const Home = lazy(() => import("./components/Home/Home"));
const Form = lazy(() => import("./components/Form"));
const validation = lazy(() => import("./validations/signUp.validation"));
const Login = lazy(() => import("./components/Login.jsx"));
import redirect from "./utils/redirect"
import { verifyToken } from "./utils/verifyToken";
import verifyUserToBeAdmin from "./utils/verifyAdmin";
import Menu from "./components/menu/Menu";
const Products = lazy(() => import("./components/product/Products.jsx"));
const Personal = lazy(() => import("./components/Personal"));
const Budget = lazy(() => import("./components/budget/Budget"));
const CanastaBasica = lazy(() => import("./components/budget/cbasica/CanastaBasica"));
const GetProductsInformation = lazy(() => import("./components/budget/cbasica/services/getProductsInformation"));
const ProductDetails = lazy(() => import("./components/budget/cbasica/ProductDetails"));
const OpcionesCanastaBasica = lazy(() => import("./components/budget/cbasica/Opciones"))
function App() {
  const navigation = useNavigate()
  const token = Cookies.get('token')
  const [geolocation, setGeoLocation] = useState({ latitude: null, longitude: null });
  const [productDetails, setProductDetails] = useState({});
  const [login, setLogin] = useState(false)

  useLayoutEffect(() => {
    let verify = verifyToken(token)
    verify ? setLogin(true) : redirect('/', navigation)
  }, [token])

  useEffect(() => {
    getUSerLocationData(setGeoLocation)
  }, [])

  return (
    <ProductDetailsContext.Provider value={productDetails}>
      <LocationInfoContext.Provider value={geolocation}>
        <div className="app_container">
          <MainLogo />
          {login && <Menu />}
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Form />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/pla/cbasica" element={<OpcionesCanastaBasica />} />
              <Route path="/pla/cbasica/bylocation" element={<CanastaBasica setProductDetails={setProductDetails} />} />
              <Route path="/budget/pla/cbasica/bylocation/:id" element={<ProductDetails setProductDetails={setProductDetails} />} />
              <Route
                path="/account:token"
                element={<Personal />}
              />
              <Route
                path="/dashboard:token"
                element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </LocationInfoContext.Provider>
    </ProductDetailsContext.Provider>
  );
}

export default App;
