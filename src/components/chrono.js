import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
class Chrono extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 60
        };
    }
    render(){
        const startTimer=()=>{
            this.props.startTimer();
            this.myInterval = setInterval(() => {
                const { seconds } = this.state;
                if (seconds > 0) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds - 1
                    }));
                }
                if (seconds === 0) {
                    clearInterval(this.myInterval);
                    this.props.timeUp();
                    this.props.gameOver();
                    this.props.setIsActive(false);
                }
            }, 1000);
        }
        
        return(
            <div>
                <h1 style={{color:'white'}}>{this.state.seconds}</h1>
                <Button id="start" style={{marginBottom:'40px', marginTop:'30px'}} variant="outline-danger" onClick={startTimer}>Start Game</Button>
            </div>
        )
    }

}
export default Chrono;
