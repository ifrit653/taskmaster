// src/DragAndDropUpload.js
import{ useCallback, useState } from 'react';
import { Card, Container} from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

function DragNDrop() {
  const [files, setFiles] = useState([])
  const onDrop = useCallback(acceptedFiles => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles])
    // Handle the dropped files
    console.log(files);
    // Here you can handle file upload to the server or other processing
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: 'image/*,application/pdf'
  });

  return (
    <>
      <Container {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag amd drop some files here, or click to select files</p>
        }
      </Container>
      <Container>
        <h4 style={styles.text}> Uploaded files </h4>
        <ul>
          {
            files.map((file, index) => (
              <Card key={index} body style= {styles.card}>
                <li className='list-group-item'>
                {file.name} - {file.size} bytes
                </li>
              </Card>
            ))
          }
        </ul>
      </Container>
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
    margin: '20px',
  },
  text: {
    textAlign: 'center'
  },
  card: {
    marginBottom: '10px'
  }
};

export default DragNDrop;