/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";
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
  const [geolocation, setGeolocation] = useState({latitude: null, longitude: null});
  const [productDetails, setProductDetails] = useState(null);
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  const [menuOptions, setmenuOptions] = useState({
    color: "#fff",
    background: null,
  });

  useEffect(() =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
         setGeolocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
      })
    }else{
      console.log("No se pudo obtener la ubicación");
    }
  }, [])
  console.log(geolocation)

  return (
    <div className="app_container">
      <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/budget" element={<Budget />}/>
        <Route path="/budget/pla/cbasica" element={<CanastaBasica locationInfo={geolocation} setProductDetails={setProductDetails} />} />
        <Route path="/budget/pla/cbasica:id" element={ <ProductDetails locationInfo={geolocation} details={productDetails} />} />
        <Route
          path="/user:id"
          element={userData.data ? <Personal data={userData.data} /> : null}
        />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
