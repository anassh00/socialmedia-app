import React from 'react'
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const Create = ({ modal, toggle }) => {
    return (
        <div>
            <Modal size='lg' isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <div style={{ display: 'flex' }}>
                        <div className='profileImageCard'>
                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                        </div>
                        User info
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div style={{ display: "flex", flexDirection: "row", marginBottom : "20px" }}>
                        <div style={{ width: "50%", height: "50%", marginRight: "5px" }}>
                            <div style={{ width: "350px", height: "350px", backgroundColor: "black" }}></div>
                        </div>
                        <div style={{ width: "50%", height: "50%" }}>
                            <FormGroup>
                                <Label for="exampleText">
                                    Description
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                    style={{height : "250px", marginBottom : "10px"}}
                                />
                                <Button>Share</Button>
                            </FormGroup>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Create