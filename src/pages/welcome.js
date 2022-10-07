import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import uuid from "react-uuid";

function Welcome(){
    const [userName, setuserName] = React.useState("");
   const handleSubmit=(e)=>{
        if(userName===""){
            alert("Please enter your name");
        }
        else{
            console.log(userName);
            e.preventDefault();
            localStorage.setItem("userName",userName);
            localStorage.setItem("lastScore",0);
            localStorage.setItem("id",uuid());
            window.location.href="/type";
        }
   }
        return(
            <div className="welcomeMain">
                 <Container className="main">
                    <Row>
                        <Col className="d-flex flex-column" >
                            <h1 style={{color:"white"}}>Klavye Hız Testine Hoş geldiniz</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label style={{color:"#d0d3cf"}}>Kullanıcı Adı</Form.Label>
                                    <Form.Control onChange={(e)=>setuserName(e.target.value)} type="text" placeholder="Kullanıcı Adı"/>
                                    <Form.Text className="text-muted">
                                    </Form.Text><hr></hr>
                                    <Button variant="outline-success" type="submit">
                                    Teste Başla!
                                    </Button> 
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}
export default Welcome;
