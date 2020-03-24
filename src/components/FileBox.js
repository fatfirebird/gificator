import React, { useCallback } from 'react'
import { Box, Typography } from '@material-ui/core/'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { loadFile } from '../redux/actions/actions'

const DashedBox = styled(Box)`
  border-style: dashed;

  &:hover {
    background-color: #e4e4e442;
  }
`

const Input = styled.input`
  outline: none;
`

export default () => {
  const dispatch = useDispatch()

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      // reader.onabort = () => console.log('file reading was aborted')
      // reader.onerror = () => console.log('file reading has failed')

      reader.onload = () => {
        const type = file.type
        const url = reader.result
        dispatch(loadFile(url, type))
        console.log(type)
      }
      reader.readAsDataURL(file)
    })
  }, [dispatch])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop})

  return (
    <DashedBox 
      {...getRootProps()} 
      border={2} 
      style={isDragActive ? { 'background': '#e4e4e442'} : {}} 
      borderColor="grey.500" p={10} 
    >
      <Input {...getInputProps()} />
      <Typography variant='body1' align='center'>
        Бросьте объект сюда
      </Typography>
    </DashedBox>
  )
}