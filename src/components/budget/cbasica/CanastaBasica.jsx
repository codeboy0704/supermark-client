import React, { useEffect, useState } from 'react'
import MainLogo from '../../MainLogo'
import ProductList from './ProductList'
import mockData from "./mock.data.json"
import axios from 'axios'

function CanastaBasica() {
    const [data,setData] = useState([])
    const getProducts = async () =>{
        const req = await axios.get('http://localhost:3001/api/products')
        const res = await req.data
        setData(res.data)
    }
    useEffect(()=>{
    //   getProducts()
    }, [])
    
    return (
    <>
        <MainLogo />
        <div className='canasta_basica_cont'>
        <ProductList arr={mockData} />
        </div>
    </>
  )
}

export default CanastaBasica