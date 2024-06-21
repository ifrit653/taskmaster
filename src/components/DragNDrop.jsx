// src/DragAndDropUpload.js
import{ useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function DragNDrop() {
  const [files, setFiles] = useState([])
  const [errorMessages, setErrorMessages] = useState([])
  const maxSize =  5 * 1024 * 1024
  const onDrop = useCallback(acceptedFiles => {
    const newFiles = []
    const newErrors = []
    acceptedFiles.forEach(file => {
      if (!file.type.includes('image/') && file.type !== 'application/pdf') {
        newErrors.push(`${file.name} is not a supported file type.`);
      } else if (file.size > maxSize) {
        newErrors.push(`${file.name} is too large. Maximum size is 5MB.`);
      } else {
        newFiles.push(file);
      }
    });
    setFiles(prevFiles => [...prevFiles, ...newFiles])
    setErrorMessages(prevErrors => [...prevErrors, newErrors])
    // Handle the dropped files
    console.log(files);
    // Here you can handle file upload to the server or other processing
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: 'image/*,application/pdf',
    multiple: true 
  });

  return (
    <>
      <div {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag amd drop some files here, or click to select files</p>
        }
      </div>
      <div>
        <h4 style={styles.text}> Uploaded files </h4>
        <ul>
          {
            files.map((file, index) => (
              <div key={index} body style= {styles.card}>
                <li className='list-group-item'>
                {file.name} - {file.size} bytes
                </li>
              </div>
            ))
          }
        </ul>
      </div>
      <div>
        <h4> {errorMessages == []? null: 'Erros'} </h4>
        {errorMessages != []?<ul>
          {errorMessages.map((error,index) => (
            <div key={index} body bg= 'Danger'> 
              <li className='list-group-item'>  
                {error}
              </li>
            </div>
          ))}
        </ul>: null }
      </div>
    </>
  );
}

const styles = {
  dropzone: {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '0 auto',
    marginBottom: '50px'
  },
  text: {
    textAlign: 'center'
  },
  card: {
    marginBottom: '10px'
  }
};

export default DragNDrop;