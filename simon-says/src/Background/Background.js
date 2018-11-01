import React from 'react'

import './Background.css'

const background = () => {

    // const clickedTri = () => {
    //     console.log("clicked triangle down");
    // }
    return (
        <div>
            <div className="circle"></div>

            <div className="smallCircle"></div>

            <div className="triangleDown"></div>
            <div className="triangleUp"></div>
            <div className="triangleLeft"></div>
            <div className="triangleRight"></div>

        </div>
    )
}

export default background;