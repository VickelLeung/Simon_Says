import React, { Component } from 'react';

import BtnFunctions from '../../Components/btnFunctions/btnFunctions'
import Background from '../../Background/Background'
import '../Game/Game.css'

//1) play->generate random number from 1-6(# of times change color)
//2) array to keep track of colors each iteration(display name)
//3) 

class Game extends Component {
    state = {
        colorArr: [],
        colorCounter: ['smallCircle', 'triangleUp', 'triangleDown', 'triangleRight', 'triangleLeft'],
        lengthArr: 0,
        position: 0,
        currentColor: "",
        glowColor: "",
        isStarted: false
    }

    generateRandomNum = () => {
        return Math.floor((Math.random() * 5) + 0);
    }

    runGame = () => {
        //get rand # for turns
        let turn = this.generateRandomNum() + 1;
        //array of colors
        let colors = ['green', 'blue', 'red', 'orange', 'yellow'];
        //clone arrasd
        // let arr = this.state.colorArr.splice;

        let arr = [...this.state.colorArr];
        let length = 0;
        console.log("tursn:" + turn);

        //fil in color randomly using loop
        for (let i = 0; i < turn; i++) {
            //randomly choose a color and set it
            let randColor = this.generateRandomNum();
            length++;
            arr[i] = colors[randColor];
            // console.log("color changed: " + arr[i]);
        }

        this.setState({
            colorArr: arr,
            randNum: turn,
            lengthArr: length
        }, () => console.log("color: " + this.state.colorArr + "lenght: " + this.state.lengthArr))

        // this.changeColorName();
    }

    changeColorName = () => {

        // console.log(this.state.colorArr[0])
        if (!this.state.isStarted) {
            this.change(this.state.lengthArr - 1);

            this.setState({ isStarted: true })
        }
    }

    change = (i) => {

        setTimeout(function () {

            if (i < 0) {
                console.log("done");
                this.setState({ currentColor: "" })
                return;
            }

            let tempArr = this.state.colorCounter;

            console.log(i + " : " + this.state.colorArr[i])
            if (this.state.colorArr[i] === 'green') {

                tempArr[1] = 'greenGlow';
                this.setState({
                    colorCounter: tempArr,
                    currentColor: "green"
                })
            }
            else if (this.state.colorArr[i] === 'yellow') {
                this.setState({ currentColor: "yellow" });
                tempArr[0] = 'yellowGlow';
                this.setState({ colorCounter: tempArr })
            }
            else if (this.state.colorArr[i] === 'red') {
                this.setState({
                    currentColor: "red",

                });
            }
            else if (this.state.colorArr[i] === 'blue') {
                this.setState({ currentColor: "blue" });
            }
            else if (this.state.colorArr[i] === 'orange') {
                this.setState({ currentColor: "orange" });
            }

            if (tempArr[0] === 'yellowGlow') {
                tempArr[0] = 'smallCircle';
            }
            if (tempArr[1] === 'greenGlow') {
                tempArr[1] = 'triangleUp';
            }

            // this.setState({ colorCounter: tempArr })

            this.change(--i);

        }.bind(this), 2000);


    }

    makeColorGlow = (props) => {

    }

    render() {
        const assigned = "";

        this.makeColorGlow(assigned);

        return (
            <div>
                <h2 onClick={this.runGame}> Simon Says: <span className={this.state.currentColor}>{this.state.currentColor}</span></h2>
                {/* <BtnFunctions name='Play' onClick={this.displayColorSequence} /> */}

                {/* make another components for play/rules */}
                <button>Rules</button>
                <button onClick={this.changeColorName}>Game</button>

                <Background />
                <div>
                    <div className={this.state.colorCounter[0]}></div>
                    <div className={this.state.colorCounter[1]}></div>
                    <div className={this.state.colorCounter[2]}></div>
                    <div className={this.state.colorCounter[3]}></div>
                    <div className={this.state.colorCounter[4]}></div>

                    {/* <div className={assigned.concat("smallCircle")}></div>
                    <div className={assigned.concat("triangleDown")}></div>
                    <div className={assigned.concat("triangleUp")}></div>
                    <div className={assigned.concat("triangleRight")}></div>
                    <div className={assigned.concat("triangleLeft")}></div> */}
                </div>


            </div >
        )
    }
}

export default Game;