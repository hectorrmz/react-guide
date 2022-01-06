import React, { useRef, useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { green } from '@mui/material/colors';

import {
  Box,
  CircularProgress,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const Uploader = ({ onFileUploaded }) => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const selectorHandler = (element) => {
    console.log(element.target.files[0]);

    setFile(element.target.files[0]);
    setSuccess(false);
  };

  const uploadHandler = async () => {
    if (success) {
      return;
    }

    setLoading(true);
    const response = await uploadBytes(ref(storage, file.name), file);

    if (response.ok) {
    }

    setSuccess(true);
    setLoading(false);
    console.log('Uploaded a blob or file!', response);

    onFileUploaded();
  };

  const removeFileHandler = () => {
    fileInputRef.current.value = '';
    setFile(null);
    setSuccess(false);
  };

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  return (
    <Box sx={{ my: 4 }}>
      <h2>File Uploader</h2>

      {file && (
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={removeFileHandler}
            >
              {!loading && <DeleteIcon />}
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </IconButton>
          }
        >
          <ListItemIcon>
            <ArticleIcon color="action" />
          </ListItemIcon>
          <ListItemText>{file.name}</ListItemText>
        </ListItem>
      )}

      <Button variant="contained" component="label" sx={{ mr: 3 }}>
        Select File
        <input
          ref={fileInputRef}
          type="file"
          name="upload"
          onChange={selectorHandler}
          hidden
        />
      </Button>

      <Button
        variant="contained"
        sx={buttonSx}
        disabled={!file || loading}
        onClick={uploadHandler}
      >
        {success ? 'Uploaded!' : 'Upload'}
      </Button>
    </Box>
  );
};

export default Uploader;
