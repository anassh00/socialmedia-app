import React from 'react'
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Post = ({modal, toggle}) => {
    return (
      <div>
        {/* <Button color="danger" onClick={toggle}>
          Click Me
        </Button> */}
        <Modal size='lg' isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
          <div style={{display : 'flex'}}>
            <div className='profileImageCard'>
                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
            </div>
            User info
            </div>
          </ModalHeader>
          <ModalBody>
            <div style={{display : "flex", flexDirection : "row"}}>
            <div>
            <img style={{width:"100%", height:"100%", margin: "0 auto"}} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt37e93a8fcef791c8/62e8ebba6f09a9530ac0f656/pl_completed_transfers.jpg"/>
            </div>
            <div>
             Text   
            </div>
            </div>
          </ModalBody>
          <ModalFooter style={{display : 'flex', flexDirection : 'column', alignItems : 'flex-start'}}>
          <div>
                <AiOutlineHeart style={{width: "20px", height: "20px", marginRight : "10px"}}/>
                <BiCommentDetail  style={{width: "19px", height: "19px"}}/>
            </div>
            <div>2674 likes</div>
            {/* <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button> */}
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default Post