import React, { Component } from 'react';

import BtnFunctions from '../../Components/btnFunctions/btnFunctions'

import '../Game/Game.css'

//1) play->generate random number from 1-6(# of times change color)
//2) array to keep track of colors each iteration(display name)
//3) 

class Game extends Component {
    state = {
        colorArr: ['', 'est', '', '', ''],
        randNum: 0,
        lengthArr: 0,
        position: 0,
        currentColor: "",
    }

    generateRandomNum = () => {
        return Math.floor((Math.random() * 4) + 0);

        // this.setState({
        //     randNum: rand
        // })
        // console.log(rand);
    }

    runGame = () => {
        //get rand # for turns
        let turn = this.generateRandomNum() + 1;
        //array of colors
        let colors = ['green', 'blue', 'red', 'orange', 'yellow'];
        //clone arrasd
        // let arr = this.state.colorArr.splice;

        let arr = [...this.state.colorArr];

        console.log("tursn:" + turn);

        //fil in color randomly using loop
        for (let i = 0; i < turn; i++) {
            //randomly choose a color and set it
            let randColor = this.generateRandomNum();

            arr[i] = colors[randColor];
            // console.log("color changed: " + arr[i]);
        }

        // const updatedPosts = posts.map(post => {
        //     return {
        //         ...post,
        //         author: 'Max'
        //     }
        // });

        this.setState({
            colorArr: arr,
            // colorArr: 
            lengthArr: this.state.colorArr.length,
            randNum: turn
        }, () => console.log(this.state.colorArr))

        // for (let i = 0; i < 5; i++)
        //     console.log("color " + arr[i]);

        // for (let i = 0; i < this.state.colorArr.length; i++)
        // console.log("arrColor:" + this.state.colorArr)

        // this.setState({
        //     colorArr: [...this.state.colorArr, ...arr]
        // })

        // for (let i = 0; i < this.state.colorArr.length; i++) {
        //     console.log("colors: " + this.state.colorArr[i]);
        // }
    }

    changeColorName = () => {
        // console.log(this.state.colorArr[0])
        this.change(this.state.lengthArr - 1);

    }

    change = (i) => {

        if (i < 0)
            return;
        setTimeout(function() {
            console.log(i + " : " + this.state.colorArr[i])
            if (this.state.colorArr[i] === 'green')
                this.setState({ currentColor: "green" });
            else if (this.state.colorArr[i] === 'yellow')
                this.setState({ currentColor: "yellow" });
            else if (this.state.colorArr[i] === 'red')
                this.setState({ currentColor: "red" });
            else if (this.state.colorArr[i] === 'blue')
                this.setState({ currentColor: "blue" });
            else if (this.state.colorArr[i] === 'orange')
                this.setState({ currentColor: "orange" });

            // if (this.state.position < 5) {
            //     let updatePosition = this.state.position;
            //     updatePosition = updatePosition + 1;
            //     this.setState({ position: updatePosition });
            // }

            this.setState({
                cssSwitch: "." + this.state.currentColor
            })

            console.log("color:" + this.state.cssSwitch);

            this.change(--i);
        }.bind(this), 1500);
    }

    makeColorGlow() {

    }

    render() {


        return (
            <div>

                <h2 onClick={this.runGame}> Simon Says: <span className={this.state.currentColor}>{this.state.currentColor}</span></h2>
                {/* <BtnFunctions name='Play' onClick={this.displayColorSequence} /> */}
                <button>Rules</button>
                <button onClick={this.changeColorName}>Game</button>

            </div >
        )
    }
}

export default Game;