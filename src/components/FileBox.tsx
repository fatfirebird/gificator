import React, { useCallback } from 'react';
import { Box, Typography } from '@material-ui/core/';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { loadFile, sendTypeError, sendUnknownError } from '../redux/actions/actions';

const DashedBox = styled(Box)`
  border-style: dashed;

  &:hover {
    background-color: #e4e4e442;
  }
`;

const Input = styled.input`
  outline: none;
`;

export default () => {
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles: []) => {
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader();
      const formats: Array<string> = ['image/gif', 'video/mp4', 'video/webm'];
      
      reader.readAsDataURL(file);

      if (formats.includes(file.type)) {
        reader.onload = () => {
          const type = file.type;
          const url = reader.result as string;
          dispatch(loadFile(url, type));
        }
      } else {
        dispatch(sendTypeError());
      }
      
      reader.onerror = () => dispatch(sendUnknownError());
    })
  }, [dispatch]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  return (
    <DashedBox 
      {...getRootProps()} 
      border={2} 
      style={isDragActive ? {'background': '#e4e4e442'} : {}} 
      borderColor="grey.500" p={10} 
    >
      <Input 
        {...getInputProps()} 
        accept='.mp4, .webm'
      />
      <Typography variant='body1' align='center'>
        Бросьте .mp4 или .webm файл сюда
      </Typography>
    </DashedBox>
  )
}