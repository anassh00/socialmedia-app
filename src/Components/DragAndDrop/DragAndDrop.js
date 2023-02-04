import React, { useRef, useState } from 'react';
import './DragAndDrop.css';

const DragAndDrop = ({ setFile }) => {
    const [image, setImage] = useState(null);
    const [fileExt, setFileExt] = useState("");
    const [isVideo, setIsVideo] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const fileInput = useRef(null);

    const handleFile = file => {
        //you can carry out any file validations here...
        setImage(file);
        setFile(file);
        setFileExt(file.name.split('.').pop());
        if (fileExt == "mp4") {
            setIsVideo(true);
        }
        setPreviewUrl(URL.createObjectURL(file));
    }

    const handleOndragOver = event => {
        event.preventDefault();
    }

    const handleOndrop = event => {
        //prevent the browser from opening the image
        event.preventDefault();
        event.stopPropagation();         //let's grab the image file
        let imageFile = event.dataTransfer.files[0];
        handleFile(imageFile);
    }

    return (
        <div className="wrapper">
            <div
                className="drop_zone"
                onDragOver={handleOndragOver}
                onDrop={handleOndrop}
                onClick={() => fileInput.current.click()}
            >
                {previewUrl && isVideo ?
                        <video width="750" height="500" controls >
                            <source src={previewUrl} type="video/mp4" />
                        </video>
                    :
                    (previewUrl && !isVideo ?
                        <div className="image">
                            <img src={previewUrl} style={{ width: "150px" }} alt='image' />
                            {/* <span> {image.name} </span> */}
                        </div>
                        :
                        <p>Click to select or Drag and drop image here....</p>
                    )
                }
                <input
                    type="file"
                    accept='image/*,video/*'
                    ref={fileInput} hidden
                    onChange={e => handleFile(e.target.files[0])}
                />
            </div>
        </div>
    )
}

export default DragAndDrop