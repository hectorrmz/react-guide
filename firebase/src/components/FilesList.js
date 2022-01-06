import { Box, IconButton, LinearProgress, List, ListItem } from '@mui/material';
import React from 'react';
import FileItem from './FileItem';
import DeleteIcon from '@mui/icons-material/Delete';

const FilesList = ({ files, onFileClick, onDeleteFile }) => {
  const listItemClickHandler = (file) => {
    onFileClick(file);
  };

  const removeFileHandler = (file, event) => {
    event.stopPropagation();
    onDeleteFile(file);
  };

  return (
    <Box sx={{ my: 4 }}>
      <h2>Files List</h2>

      {!files.length && <LinearProgress />}
      <List>
        {files.map((file) => (
          <ListItem
            key={file}
            disablePadding
            onClick={listItemClickHandler.bind(null, file)}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={removeFileHandler.bind(null, file)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <FileItem file={file} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FilesList;
