import React, { Component } from 'react';

//import BtnFunctions from '../../Components/btnFunctions/btnFunctions'
import Background from '../../Background/Background'
import '../Game/Game.css'

import Points from '../Points/Points'
import Modals from '../Modal/Modal'

//1) play->generate random number from 1-6(# of times change color)
//2) array to keep track of colors each iteration(display name)
//3) 

// Timer for response time

class Game extends Component {
    state = {
        colorArr: [],
        colorCounter: ['smallCircle', 'triangleUp', 'triangleDown', 'triangleRight', 'triangleLeft'],
        lengthArr: 0,
        currentColor: "",
        isStarted: false,
        isPlayable: false,
        time: 10,
        isCountdown: false,
        isWon: null,
        userAnswers: [],
        userTries: 0,
        points: 0
    }

    generateRandomNum = () => {
        return Math.floor((Math.random() * 5) + 0);
    }

    runGame = () => {
        //get rand # for turns
        let turn = this.generateRandomNum() + 1;
        //array of colors
        let colors = ['green', 'blue', 'red', 'orange', 'yellow'];
        //clone arr

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

    }

    changeColorName = () => {
        this.runGame();
        if (!this.state.isStarted) {

            this.change(this.state.lengthArr - 1);

            this.setState({ isStarted: true })

        }
    }

    change = (i) => {

        setTimeout(function () {
            let tempArr = this.state.colorCounter;

            if (tempArr[4] === 'orangeGlow')
                tempArr[4] = 'triangleLeft'

            if (tempArr[0] === 'yellowGlow')
                tempArr[0] = 'smallCircle';

            if (tempArr[1] === 'greenGlow')
                tempArr[1] = 'triangleUp';

            if (tempArr[2] === 'redGlow')
                tempArr[2] = 'triangleDown';

            if (tempArr[3] === 'blueGlow')
                tempArr[3] = 'triangleRight'

            this.setState({ colorCounter: tempArr })

            if (i < 0) {
                console.log("done");
                this.setState({ currentColor: "" })
                // console.log("you have 10 seconds to answers")
                // this.tick();
                return;
            }

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
                tempArr[2] = 'redGlow'
                this.setState({
                    currentColor: "red",
                    colorCounter: tempArr
                });
            }
            else if (this.state.colorArr[i] === 'blue') {
                tempArr[3] = 'blueGlow'
                this.setState({
                    currentColor: "blue",
                    colorCounter: tempArr
                });
            }
            else if (this.state.colorArr[i] === 'orange') {
                tempArr[4] = 'orangeGlow'
                this.setState({
                    currentColor: "orange",
                    colorCounter: tempArr
                });
            }

            this.change(--i);

            this.setState({
                isPlayable: true
            })

        }.bind(this), 2000);
    }

    compareAnswers = (input) => {
        let tries = this.state.userTries;
        let userInput = [...this.state.userAnswers];

        if (this.state.isPlayable) {

            console.log("clicked tries:" + tries);
            //compare answer if numbers of tries equals the length of colorArr - loser
            if (tries === this.state.colorArr.length) {

                this.setState({
                    isWon: false
                }, () => console.log("isWon:" + this.state.isWon))
                console.log("You lost")

            }
            else {

                //else add user input into userAnswers
                userInput.push(input);

                //increments tries to one
                tries++;

                this.setState({
                    userTries: tries,
                    userAnswers: userInput
                }, () => { console.log("userAns :" + this.state.userAnswers) })

                // userInput.concat(input);
                console.log("inpu :" + input);
            }
        }

        //compare answers
        if (this.equalArr(userInput)) {
            //set states to won
            this.setState({
                isWon: true,
                points: this.state.points + 1,
                isPlayable: true
            }, () => console.log("isWon:" + this.state.isWon))
            console.log("you won")
        }
    }

    equalArr = (arr) => {

        let compareArr = this.state.colorArr;

        if (arr === null)
            return false;

        if (compareArr.length !== arr.length)
            return false;

        if (arr.length === 1)
            if (arr[0] === compareArr[0]) {
                console.log('true');
                return true;
            }

        let j = arr.length - 1;
        for (let i = 0; i < arr.length; i++) {

            console.log("j:" + j);
            console.log("arr[" + i + "]: " + arr[j] + " compArr[" + j + "]: " + compareArr[j])
            if (compareArr[j] !== arr[i])
                return false;
            j--;
        }

        console.log('true2')
        return true;
    }

    tick = () => {
        let timer = this.state.time;
        setInterval(() => {
            if (timer > 0)
                timer--;
            this.setState({
                time: timer
            })
        }, 1000)
        // console.log("clicked time" + "time:" + this.state.time + " timer:" + this.state.timer)
    }

    toggleModal = () => {

        if (this.state.isWon)
            return true;


        return false;
    }

    render() {

        let modalText = ""
        if (this.state.isWon)
            modalText = "Congratulations! You won"
        else
            modalText = "You lost sorry"

        let startModal =

            <Modals show={true}>
                Game start in :{this.state.time}
            </Modals>


        return (
            <div>
                <h2 onClick={this.runGame}> Vick Says: <span className={this.state.currentColor}>{this.state.currentColor}</span></h2>
                {/* <BtnFunctions name='Play' onClick={this.displayColorSequence} /> */}

                {/* make another components for play/rules */}
                <button onClick={this.tick}>Rules</button>
                <button onClick={this.changeColorName}>Game</button>

                <Background />
                <div>
                    <div onClick={() => this.compareAnswers('yellow')} className={this.state.colorCounter[0]}></div>
                    <div onClick={() => this.compareAnswers('green')} className={this.state.colorCounter[1]}></div>
                    <div onClick={() => this.compareAnswers('red')} className={this.state.colorCounter[2]}></div>
                    <div onClick={() => this.compareAnswers('blue')} className={this.state.colorCounter[3]}></div>
                    <div onClick={() => this.compareAnswers('orange')} className={this.state.colorCounter[4]}></div>

                    <Points pointers={this.state.points} />
                    {/* <p>Color Sequence: {this.state.colorArr}</p> */}
                    <h3>Timer: {this.state.time}</h3>

                    {/* {startModal} */}
                    <Modals show={this.toggleModal()} >
                        {modalText}
                        <div>
                            <button>Play again</button>
                            <button>Close</button>
                        </div>
                    </Modals>
                </div>
            </div >
        )
    }
}

export default Game;