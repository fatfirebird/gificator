import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import FormatButtons from './FormatButtons';

export default () => {
  const file = useSelector(state => state.file)
  const { url, type } = file

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
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
        <Button variant="contained" color="secondary">Конвертировать</Button>
      </Grid>
    </Grid>
  )
}