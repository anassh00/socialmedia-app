import React from 'react'
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import DragAndDrop from '../DragAndDrop/DragAndDrop.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import authService from '../../Services/auth.service.js';
import postService from '../../Services/post.service.js';

const Create = ({ modal, toggle }) => {
    const [file, setFile] = useState(null);
    const authed = authService.getCurrentUser();
    const [description, setDescription] = useState("");

    const handleChangeDescription = (event) => {
      setDescription(event.target.value);
    }

    const handleToggle = () => {
        toggle();
        setFile(null);
    }

    async function  handleSubmit () {
        try{
            console.log("submit !");
            let uploadfile = await postService.uploadfile(file);
            let uploadPost = await postService.savePost(description,uploadfile,authed.data.username);
            handleToggle();
            window.location.reload(false);
        }catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <Modal size='lg' isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>
                    <div style={{ display: 'flex' }}>
                        <div className='profileImageCard'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                        </div>
                        {authed.data.username}
                    </div>
                </ModalHeader>
                <ModalBody>
                    <DragAndDrop setFile={setFile} file={file}></DragAndDrop>
                    <div>
                        <div>
                            <FormGroup style={{ display: "flex", flexDirection: "column", marginBottom : "20px", width : "725px"}}>
                                <Label style={{marginLeft : "20px"}} for="exampleText">
                                    Description
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                    style={{marginBottom : "20px", marginLeft : "20px"}}
                                    onChange={handleChangeDescription}
                                />
                                <Button onClick={handleSubmit} style={{marginLeft : "20px", width : "100%"}}>Partager</Button>
                            </FormGroup>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Create