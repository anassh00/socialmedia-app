import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'

const PostCard = () => {
  return (
    <div style={{marginBottom : "20px"}}>
        <Card
        className="my-2"
        style={{
            width: '35rem'
        }}
        >
        <CardHeader>
            User info
        </CardHeader>
        <CardBody>
            <CardText>
            Media goes here
            </CardText>
        </CardBody>
        <CardFooter>
            Reactions
        </CardFooter>
        </Card>
    </div>
  )
}

export default PostCard