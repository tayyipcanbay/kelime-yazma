import React from "react";
import {useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chrono from "../components/chrono";

function Type(){
    const [user, setUser]=React.useState({
        userName:localStorage.getItem("userName"),
        topScore:localStorage.getItem("topScore"),
        id:localStorage.getItem("id")
    });
    const [isActive, setIsActive]=React.useState(false);
    const [words,setWords]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://random-word-api.herokuapp.com/word?number=100")
        .then(res=>res.json())
        .then(data=>{
            setWords(data);
        })
    },[]);
    const startTimer=()=>{
        document.getElementById("start").style.display="none";
        document.getElementById("chrono").style.display="block";
        handleGame();
        setIsActive(true);
    }
    const timeUp=()=>{
        document.getElementById("chrono").style.display="none";
        alert("Time is up!");
    }
    const getInput=()=>{
        return document.getElementById("input").value;
    }
    
    const handleGame=()=>{
        let score=0;
        let i=0;
        let word= words[i];
        let currentDiv=document.getElementById("current");
        let nextDiv=document.getElementById("next");
        
        setInterval(()=>{
            currentDiv.innerHTML=word;
            nextDiv.innerHTML=words[i+1];
            let input=getInput();
            console.log(input);
            if(input===word){
                i++;
                word=words[i];
                document.getElementById("input").value="";
                score=score+1;
                document.getElementById("score").innerHTML=score;
                console.log(score);
            }
        },100);
    }
    const gameOver=()=>{
        alert("Game Over!");
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1>Typing Game</h1>
                    </Col>
                    <Row>
                        <Col>
                        <h2 id="score">Top Score: {user.topScore}</h2>
                        </Col>
                        <Col>
                        <h2>Username: {user.userName}</h2>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:'30px'}}>
                        <Col className="wordCol">
                            <div id="current" className="wordDiv">
                                Current Word
                            </div>
                        </Col>
                        <Col className="wordCol">
                                <Form.Control onChange={getInput} id="input" className="inp" type="text" placeholder="Enter text" />
                        </Col>
                        <Col id="next" className="wordCol">
                            <div className="wordDiv">
                                Next Word
                            </div>                        
                        </Col>
                        <div id="chrono">
                            <Chrono setIsActive={setIsActive} gameOver={gameOver} timeUp={timeUp} startTimer={startTimer}/>
                        </div>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}
export default Type;
