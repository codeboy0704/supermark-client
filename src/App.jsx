/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import validation from "./validations/signUp.validation";
import Form from "./components/Form";
import Login from "./components/Login.jsx";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import redirect from "./utils/redirect";
import Menu from "./components/menu/Menu.jsx";
import Products from "./components/product/Products.jsx";
import Modal from "./components/Modal";
import { UserContext } from "./context/UserContext";
import Personal from "./components/Personal";
import Budget from "./components/budget/Budget";
import CanastaBasica from "./components/budget/cbasica/CanastaBasica";
function App() {
  const [geolocation, setGeolocation] = useState({latitude: null, longitude: null})
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

  return (
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/budget" element={<Budget />}/>
        <Route path="/budget/pla/cbasica" element={<CanastaBasica />} />
         <Route path="/budget/pla/cbasica:id" element={ <h1>Single Product details</h1> } />
        
        <Route
          path="/user:id"
          element={userData.data ? <Personal data={userData.data} /> : null}
        />
          
       
      </Routes>
    </div>
  );
}

export default App;
