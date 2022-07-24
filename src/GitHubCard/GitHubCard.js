import React from "react";
import Card from "react-bootstrap/Card";
import Allison from './Allison.jpg'

function GitHubCard() {
    return(
        <div className="card">
            <Card style={{ width: '17rem'}}>
                <Card.Img variant="top" style={{width:'17rem'}} src={Allison}/>
                <Card.Body>
                    <Card.Title>Allison Ruiz</Card.Title>
                    <Card.Text>
                        I am the coding queen.♔ I have lots of plants.✿ Peace and love✌︎ 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard