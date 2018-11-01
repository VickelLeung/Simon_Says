import React from 'react'

import './Layout.css'

import Background from '../Background/Background'
import Game from '../Components/Game/Game'
// import BtnFUnctions from '../Components/btnFunctions/btnFunctions'

const layout = () => {

    return (
        <div>


            {/* <h2>Simon Says: color...</h2>
            <BtnFUnctions /> */}
            {/* <p>The rules are simple, you just have to remember the sequence of the shapes being lit up</p> */}
            <Game />
            <Background />

            <p>Once you are ready to start, press 'play'</p>
        </div>
    )
}

export default layout;