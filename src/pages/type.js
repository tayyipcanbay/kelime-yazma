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
    }
    const timeUp=()=>{
        document.getElementById("chrono").style.display="none";
        alert("Time is up!");
    }
    const getInput=()=>{
        return document.getElementById("input").value;
    }
    //Buradaki interval yazılacak doğru kelime başına score güncellenecek
    //Chrono ile haberleşip oyun bittiğinde gameOver fonksiyonu çalışacak
    //GameOver fonksiyonu localStorage daki topScore ile şuanki score 
    //karşılaştırılacak ve eğer şuanki score büyükse localStorage daki
    //topScore güncellenecek
    //Sonrasında Score sayfasına yönlendirilecek
    
    const handleGame=setInterval(()=>{
        if(getInput()===words[0]){
            document.getElementById("inp").value="";
            document.getElementById("word").innerHTML=words[1];
            words.shift();
        }
    },100);
    const gameOver=()=>{

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
                        <h2>Top Score: {user.topScore}</h2>
                        </Col>
                        <Col>
                        <h2>Username: {user.userName}</h2>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:'30px'}}>
                        <Col className="wordCol">
                            <div className="wordDiv">
                                Current Word
                            </div>
                        </Col>
                        <Col className="wordCol">
                                <Form.Control onChange={getInput} className="inp" type="text" placeholder="Enter text" />
                        </Col>
                        <Col className="wordCol">
                            <div className="wordDiv">
                                Next Word
                            </div>                        
                        </Col>
                        <div id="chrono">
                            <Chrono timeUp={timeUp} startTimer={startTimer}/>
                        </div>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}
export default Type;
