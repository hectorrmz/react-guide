import logo from './logo.svg';
import './App.css';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { useEffect } from 'react';

function App() {
  const testRef = ref(storage, 'test');
  const imageRef = ref(testRef, 'logo.png');

  console.log(imageRef.fullPath);

  const uploadHandler = (element) => {
    const file = element.target.files[0];

    uploadBytes(ref(storage, 'test/logo-1.png'), file).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    });
  };

  const listFiles = async () => {
    const response = await listAll(ref(storage));

    response.items.forEach((itemRef) => {
      // All the items under listRef.
      console.log(itemRef.fullPath);
    });
  };

  useEffect(() => {
    listFiles();
  }, []);

  const downloadHandler = async () => {
    const url = await getDownloadURL(ref(storage, 'test'));
    console.log(url);

    window.open(
      url,
      '_blank',
      'location=yes,height=400,width=400,scrollbars=yes,status=yes'
    );
  };

  return (
    <>
      <input type="file" name="upload" onChange={uploadHandler} />
      <br />
      <br />
      <button onClick={downloadHandler}>Download</button>
      <img id="myimg" />
    </>
  );
}

export default App;
