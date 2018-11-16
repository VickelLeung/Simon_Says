import React from 'react'

import './Layout.css'

import Game from '../Components/Game/Game'
// import BtnFUnctions from '../Components/btnFunctions/btnFunctions'

const layout = () => {

    return (
        <div>
            <Game />
            <p>Once you are ready to start, press 'play'</p>
        </div>
    )
}

export default layout;