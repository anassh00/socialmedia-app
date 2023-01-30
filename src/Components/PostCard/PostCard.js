import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'
import './PostCard.css';
import { AiOutlineHeart } from 'react-icons/ai';
import {BiCommentDetail} from 'react-icons/bi';

const PostCard = ({commentFct}) => {
  return (
    <div style={{marginBottom : "20px"}}>
        <Card
        className="my-2"
        style={{
            width: '35rem'
        }}
        >
        <CardHeader>
            <div style={{display : 'flex'}}>
            <div className='profileImageCard'>
                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
            </div>
            User info
            </div>
        </CardHeader>
        <CardBody>
            <img style={{width:"100%", height:"100%", margin: "0 auto"}} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt37e93a8fcef791c8/62e8ebba6f09a9530ac0f656/pl_completed_transfers.jpg"/>
        </CardBody>
        <CardFooter>
            <div>
                <AiOutlineHeart style={{width: "20px", height: "20px", marginRight : "10px"}}/>
                <BiCommentDetail onClick={commentFct} style={{width: "19px", height: "19px", cursor : "pointer"}}/>
            </div>
            <div>2674 likes</div>
        </CardFooter>
        </Card>
    </div>
  )
}

export default PostCard