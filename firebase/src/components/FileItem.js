import React, { useEffect, useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { getStorage, ref, getMetadata } from 'firebase/storage';

const FileItem = ({ file }) => {
  // Create a reference to the file whose metadata we want to retrieve
  const storage = getStorage();
  const forestRef = ref(storage, file);
  const [metadata, setMetadata] = useState({});
  const [date, setDate] = useState('');

  useEffect(() => {
    // Get metadata properties
    getMetadata(forestRef).then((data) => {
      // Metadata now contains the metadata for 'images/forest.jpg'
      setMetadata(data);
      setDate(new Date(data.updated).toLocaleString());
      console.log(data);
    });
  }, []);

  return (
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={file} secondary={date} />
    </ListItemButton>
  );
};

export default FileItem;
