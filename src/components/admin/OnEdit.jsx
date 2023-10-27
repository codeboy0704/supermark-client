import React, { useState } from 'react'
import FileDrop from './DragAndDrop'

function OnEdit({ details }) {
    const [selectedFile, setSelectedFile] = useState(null)
    const [productName, setProductName] = useState(details.name || "")
    const [detectChange, setDetectChange] = useState(false)
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setSelectedFile(file)
    }
    return (
        <form className='edit_product_container'>
            <div className='image_section'>
                <picture>
                    <img src={details.image} alt={`${details.name.toLowerCase()}.image`} />
                </picture>
                <FileDrop onImageSelect={handleFileChange} />
            </div>
            <div className='product_info'>
                <input placeholder="Product Name" value={productName} onChange={(e) => {
                    setProductName(e.target.value.trim())
                }} />
                <input type='text' readOnly value={`Last update: ${details.updatedAt}`}></input>
                <input type='text' readOnly value={`ID: ${details._id}`} />
            </div>
            <button style={{ background: detectChange ? "#7975db" : "#b4b2fd" }}>Save</button>

        </form>
    )
}

export default OnEdit