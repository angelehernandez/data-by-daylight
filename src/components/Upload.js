import React, {useRef} from 'react';
import { Button } from 'react-bootstrap';

const UploadButton = ({onFileSelect}) => {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0])
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}/>
            <Button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">
                Upload
            </Button>
        </div>
    )
}

export default UploadButton;