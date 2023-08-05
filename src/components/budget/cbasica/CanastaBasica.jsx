import React, { useEffect, useState, useContext } from 'react'
import MainLogo from '../../MainLogo'
import ProductList from './ProductList'
import axios from 'axios'
import LocationInfoContext from '../../../context/LocationInfoContext'

function CanastaBasica({ setProductDetails }) {
    const locationInfo = useContext(LocationInfoContext)
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)
    const getProducts = async () => {
        const req = await axios.post('/api/product/get/many', { page: page, limit: limit })
        const res = await req.data
        setProducts(res.data.data)
        setTotalPages(res.data.total)
    }
    useEffect(() => {
        getProducts()
    }, [page])

    return (
        <>
            <MainLogo />
            {locationInfo.latitude || locationInfo.longitude ? (
                <div className='canasta_basica_cont'>
                    {products ? <ProductList arr={products} setProductDetails={setProductDetails} /> : <h1>Loading...</h1>}
                    <div className='page_options'>
                        <button onClick={() => {
                            if (page !== 0) {
                                setPage(page - 1)
                            }
                        }}>Previous</button>
                        <button onClick={() => {
                            if (page < totalPages)
                                setPage(page + 1)
                        }}>Next</button>
                    </div>
                </div>
            ) : (
                <h1>Obteniendo ubicación...</h1>
            )}
        </>
    )
}

export default CanastaBasica