import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import axios from 'axios';
import FormatButtons from './FormatButtons';

export default () => {
  const file = useSelector(state => state.file)
  const method = useSelector(state => state.method)
  const { url, type } = file

  const convert = () => {
    console.log(!method)
  }

  return (
    <Grid container spacing={2} direction='column' alignItems='center'>
      <Grid item>
        <FormatButtons type={type}/>
      </Grid>
      <Grid item>
        {
        type === 'image/gif' 
        ? 
        <img style={{ maxWidth: '400px', maxHeight: '400px' }} src={url} alt='your gif' /> 
        : 
        <video style={{maxWidth: '400px', maxHeight: '400px'}} src={url} autoPlay loop controls/>
        }
      </Grid>
      <Grid item>
        <Button onClick={convert} variant='contained' color='secondary' disabled={!method}>Конвертировать</Button>
      </Grid>
    </Grid>
  )
}