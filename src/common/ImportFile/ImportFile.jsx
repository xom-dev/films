import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postFileRequest } from './services/actions';

const ImportFile = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const uploadFileHandler = () => {
    const formData = new FormData();
    formData.append('movies', file);
    console.log(formData);
    dispatch(postFileRequest(formData));
  };
  return (
    <div>
      <input type="file" onChange={(event) => setFile(event?.target?.files[0])} />
      <button type="button" onClick={() => uploadFileHandler()}>
        Upload File
      </button>
    </div>
  );
};

export default ImportFile;
