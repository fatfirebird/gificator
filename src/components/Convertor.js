import React, { useState } from 'react';
import gifshot from 'gifshot'
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, CircularProgress, Slider, Typography } from '@material-ui/core';
import { loadFile, showLoader, removeFile, sendUnknownError } from '../redux/actions/actions';
import ContentBox from './fileContent.js';

export default () => {
  const file = useSelector(state => state.file)
  const { url, width, height, duration, type, isLoading } = file
  const [frames, setFrames] = useState(1)
  const dispatch = useDispatch()

  const convert = () => {
    dispatch(showLoader())

    gifshot.createGIF({
      'video': [url],
      'gifHeight': height,
      'gifWidth': width, 
      'numFrames': 10 * frames,
      'progressCallback': (captureProgress) => { console.log(captureProgress)} 

    }, obj => {
      if (!obj.error) {
        dispatch(loadFile(obj.image, 'image/gif'))
      } else {
        dispatch(sendUnknownError())
      }
    })
  }

  const handleSliderChange = (event, newValue) => {
    setFrames(newValue)
  }

  return (
    <Grid container spacing={2} direction='column' alignItems='center'>
      <Grid item>
        {
          isLoading
          ?
          <CircularProgress color='secondary'/>
          :
          <ContentBox/>
        }
      </Grid>
      <Grid container item xs={8} justify='center'>
        {type !== 'image/gif' &&
        <React.Fragment>
          <Typography id='input-slider' gutterBottom>
            Сколько секунд обработать
          </Typography>
          <Slider
            aria-labelledby='input-slider'
            valueLabelDisplay='auto'
            color='secondary'
            min={1}
            value={frames}
            onChange={handleSliderChange}
            max={duration}
            disabled={isLoading}
          />
        </React.Fragment>
        }
      </Grid>
      <Grid container item justify='space-around'>
        <Button onClick={convert} variant='contained' color='secondary' disabled={isLoading || type === 'image/gif'}>Конвертировать</Button>
        <Button onClick={() => dispatch(removeFile())} variant='contained' color='primary'>Удалить</Button>
      </Grid>
    </Grid>
  )
}