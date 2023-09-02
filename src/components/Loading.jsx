import React from 'react'
import LoadingAnimationLight from "../images/loading/light.gif"
function Loading() {
    return (
        <div className='loading_container'>
            <img src={LoadingAnimationLight} alt="loading-animation" />
        </div>
    )
}

export default Loading