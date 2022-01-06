import './App.css';
import { storage } from './firebase';
import { ref, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { useEffect, useState } from 'react';
import Uploader from './components/Uploader';
import { Container } from '@mui/material';
import FilesList from './components/FilesList';

function App() {
  const [files, setFiles] = useState([]);

  const listFiles = async () => {
    setFiles([]);
    const response = await listAll(ref(storage));

    response.items.forEach((itemRef) => {
      // All the items under listRef.
      setFiles((prev) => [...prev, itemRef.name].sort());
      console.log(itemRef);
    });
  };

  useEffect(() => {
    listFiles();
  }, []);

  const onFileClickHandler = async (file) => {
    console.log(file);

    const url = await getDownloadURL(ref(storage, file));

    window.open(
      url,
      '_blank',
      'location=yes,height=400,width=400,scrollbars=yes,status=yes'
    );
  };

  const deleteFileHandler = (file) => {
    const fileRef = ref(storage, file);

    // Delete the file
    deleteObject(fileRef)
      .then(() => {
        // File deleted successfully
        listFiles();
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  return (
    <Container sx={{ p: 2, width: '60%' }}>
      <h1>Testing Firebase</h1>
      <Uploader onFileUploaded={listFiles} />

      <FilesList
        files={files}
        onFileClick={onFileClickHandler}
        onDeleteFile={deleteFileHandler}
      />
    </Container>
  );
}

export default App;
