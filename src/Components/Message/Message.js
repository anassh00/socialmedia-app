import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardText, Input, ListGroup, ListGroupItem } from 'reactstrap'
import NavBar from '../NavBar/NavBar'
import { FiSend } from 'react-icons/fi'

const Message = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ display: 'flex', justifyContent : "center" }}>
        <div style={{ marginTop: "30px" }}>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <CardHeader>
              Featured
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem>
                First Message
              </ListGroupItem>
              <ListGroupItem>
                A second message
              </ListGroupItem>
              <ListGroupItem>
                And a third message
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div style={{ marginTop: "30px", marginLeft: "30px" }}>
          <Card
            style={{
              width: '35rem',
              height: '30rem'
            }}
          >
            <CardHeader>
              User info
            </CardHeader>
            <CardBody>
              <CardText>
                Messages goes here
              </CardText>
            </CardBody>
            <CardFooter>
              <div style={{display : 'flex', justifyContent: "space-between"}}>
              <Input style={{marginRight : "20px", borderRadius : "30px"}}></Input>
              <FiSend style={{marginRight : "10px" ,marginTop : "5px", width: "25px", height: "25px"}}/>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Message