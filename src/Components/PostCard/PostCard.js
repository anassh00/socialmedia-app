import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'
import './PostCard.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import authService from '../../Services/auth.service';

const API_URL = "https://symfony-backend.herokuapp.com/";

const PostCard = ({ commentFct, post }) => {

    const checkIsVideo = (file) => {
        let ext = file.split('.').pop();
        if (ext == "mp4") {
            return true;
        }
        return false;
    }

    const [user, setUser] = useState({
        description : "",
        email : ""
      });

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    useEffect(() => {
        const dataFetch = async () => {
            if (post.userId) {
                let userDataFetched = await authService.getUserById(post.userId)
                console.log("user", userDataFetched)
                setUser(userDataFetched[0]);
            }
        };

        dataFetch();
    }, [])

    return (
        <div style={{ marginBottom: "20px" }}>
            <Card
                className="my-2"
                style={{
                    width: '35rem'
                }}
            >
                <CardHeader>
                    <div style={{ display: 'flex', cursor: 'pointer' }} onClick={() => routeChange('/Profile/' + post.userId)}>
                    <div className='profileImageCard'>
                  <img src={user.filename ? API_URL+"media/"+user.filename : "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}  alt="" />
                </div>
                        {post.userId}
                    </div>
                </CardHeader>
                <CardBody>
                    {!checkIsVideo(post.filename) && post.filename ?
                        <img style={{ width: "100%", height: "100%", margin: "0 auto" }} src={API_URL + "media/" + post.filename} />
                        :
                        <div></div>
                    }
                    {checkIsVideo(post.filename) && post.filename ?
                        <video width="100%" height="100%" controls >
                            <source src={API_URL + "media/" + post.filename} type="video/mp4" />
                        </video>
                        :
                        <div></div>
                    }

                </CardBody>
                <CardFooter>
                    {/* <div style={{display : 'flex', alignItems : 'center'}}>
                        <div><AiOutlineHeart style={{ width: "20px", height: "20px", marginRight: "10px" }} /></div>
                        <BiCommentDetail onClick={commentFct} style={{ width: "19px", height: "19px", cursor: "pointer" }} />
                        <div>2674 likes</div>
                    </div> */}
                    <div>{post.description}</div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default PostCard