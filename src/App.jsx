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
const Home = lazy(() => import("./components/Home/Home"));
const Form = lazy(() => import("./components/Form"));
const validation = lazy(() => import("./validations/signUp.validation"));
const Login = lazy(() => import("./components/Login.jsx"));
const redirect = lazy(() => import("./utils/redirect"))
const Products = lazy(() => import("./components/product/Products.jsx"));
const Modal = lazy(() => import("./components/Modal"));
const Personal = lazy(() => import("./components/Personal"));
const Budget = lazy(() => import("./components/budget/Budget"));
const CanastaBasica = lazy(() => import("./components/budget/cbasica/CanastaBasica"));
const GetProductsInformation = lazy(() => import("./components/budget/cbasica/services/getProductsInformation"));
const ProductDetails = lazy(() => import("./components/budget/cbasica/ProductDetails"));
function App() {
  const [geolocation, setGeoLocation] = useState({latitude: null, longitude: null});
  const [productDetails, setProductDetails] = useState({});
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  const [menuOptions, setmenuOptions] = useState({
    color: "#fff",
    background: null,
  });

  useEffect(() =>{
   getUSerLocationData(setGeoLocation)
  }, [])

  return (
<LocationInfoContext.Provider value={geolocation}>
  <ProductDetailsContext.Provider value={productDetails}>
    <div className="app_container">
     <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/budget" element={<Budget />}/>
        <Route path="/budget/pla/cbasica" element={<CanastaBasica setProductDetails={setProductDetails} />} />
        <Route path="/budget/pla/cbasica:id" element={ <ProductDetails />} />
        <Route
          path="/user:id"
          element={userData.data ? <Personal data={userData.data} /> : null}
        />
      </Routes>
     </Suspense>
    </div>
  </ProductDetailsContext.Provider>
</LocationInfoContext.Provider>
  );
}

export default App;
