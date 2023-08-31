import '../css/fileUpload.css';
import { useState } from 'react';

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [status, setStatus] = useState('');
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadFile = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            setStatus('File uploaded successfully!');
                setTimeout(() => {
                    setStatus('');
                }, 3000);
        } else {
          setStatus('Please select a file to upload'); 
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    };

    return (
        <div className="center">
            <h1>Upload a File</h1>
            <label htmlFor="fileInput" className="file-label">
                Choose File
                <input type="file" id="fileInput" onChange={handleFileChange} />
            </label>
            {selectedFile && <p className="selected-file">file: {selectedFile.name}</p>}
            <button className="rounded-button" onClick={uploadFile}>Upload</button>
            <p className="status">{status}</p>
        </div>
    );
}