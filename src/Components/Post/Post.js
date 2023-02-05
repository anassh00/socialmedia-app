import React from 'react'
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const API_URL = "https://symfony-backend.herokuapp.com/";

const Post = ({ modal, close, desc, filename }) => {
    return (
        <div>
            <Modal size='lg' isOpen={modal} toggle={close}>
                <ModalHeader toggle={close}>
                </ModalHeader>
                <ModalBody>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "70%", height: "70%", marginRight: "20px" }}>
                            <img style={{ width: "100%", height: "100%", margin: "0 auto" }} src={API_URL+"media/"+filename} />
                        </div>
                        <div style={{ width: "30%", height: "30%"}}>
                        Description : {desc}
                                                </div>
                    </div>
                </ModalBody>
                <ModalFooter style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Post