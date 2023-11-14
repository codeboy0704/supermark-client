import React, { useEffect, useState, useContext } from 'react'
import Loading from '../Loading'
import DefaultImage from "../../images/default.png"
import getProductImage from '../budget/cbasica/services/getProductImage'
import { useNavigate } from 'react-router-dom'
import redirect from '../../utils/redirect'
import ModalComponent from '../Modal'
import OnEdit from './OnEdit'
function DisplayProducts({ arr }) {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [details, setDetails] = useState({})
    const [productName, setProductName] = useState("")
    const navigate = useNavigate();
    function switchModalState() {
        setIsOpen(sta => !sta)
    }
    const fetchImages = async () => {
        try {
            const imagePromises = arr.map(async (el) => {
                if (el.image) {
                    const image = await getProductImage(el.image);
                    return { ...el, image: image || DefaultImage };
                }
                return { ...el, image: DefaultImage }
            })
            const updatedArr = await Promise.all(imagePromises);
            setImages(updatedArr);
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchImages()
    }, [arr])

    let mapProducts = images.map((el, i) => {
        return (
            <div key={el._id} className='dashboard_card'>
                <button onClick={() => {
                    redirect(`/dashboard:${user._id}:${el._id}`, navigate)
                }} className='main'>
                    <div className='title_cont'>
                        <h2>{el.name}</h2>
                    </div>
                    <div className='image_container'>
                        <img src={el.image} alt={el.name} />
                    </div>
                </button>
                <div className='card_options'>
                    <button onClick={() => {
                        switchModalState()
                        setDetails(el)
                        console.log(el)
                    }}>Edit</button>
                </div>
            </div>
        )
    })
    return (
        <div className='dashboard_product_list'>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {mapProducts}
                    <ModalComponent isOpen={modalIsOpen} toggle={switchModalState}>
                        <OnEdit details={details} />
                    </ModalComponent>
                </>

            )}
        </div>
    )
}

export default DisplayProducts