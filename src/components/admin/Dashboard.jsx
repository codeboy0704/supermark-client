import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductList from '../budget/cbasica/ProductList';
import Loading from '../Loading';
import DisplayProducts from './DisplayProducts';

function Dashboard() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [onLoad, setOnLoad] = useState(true)
    const [totalPages, setTotalPages] = useState(0);

    const getProducts = async () => {
        setOnLoad(true)
        const req = await axios.get(`/api/product/many/${page}/${limit}`)
        const res = await req.data
        const data = await res.data.data
        setProducts(data)
        setTotalPages(res.data.total)
        setOnLoad(false)
    }
    useEffect(() => {
        getProducts()
    }, [page])
    return (
        <div>
            {!onLoad ? (
                <>
                    <DisplayProducts arr={products} />
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
                </>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Dashboard