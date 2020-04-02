import React, { useState, ChangeEvent } from 'react';
// @ts-ignore
import gifshot from 'gifshot';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, CircularProgress, Slider, Typography } from '@material-ui/core';
import { AppState } from '../redux/reducers/rootReducer';
import { loadFile, showLoader, removeFile, sendUnknownError } from '../redux/actions/actions';
import ContentBox from './fileContent';

export default () => {
  const file = useSelector((state: AppState) => state.file);
  const { url, width, height, duration, type, isLoading } = file;
  const [frames, setFrames] = useState(1);
  const dispatch = useDispatch();

  const convert = () => {
    dispatch(showLoader())

    gifshot.createGIF({
      'video': [url],
      'gifHeight': height,
      'gifWidth': width, 
      'numFrames': 10 * frames,
    }, (obj: any) => {
      if (!obj.error) {
        dispatch(loadFile(obj.image, 'image/gif'))
      } else {
        dispatch(sendUnknownError())
      }
    })
  }

  const handleSliderChange = (event: ChangeEvent<{}>, newValue: number | number[]): void => {
    setFrames(newValue as number);
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
          <Typography id='input-slider' gutterBottom align='center'>
            Дождитесь окончания обработки, либо отмените её 
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
        <Button 
          onClick={convert} 
          variant='contained' 
          color='secondary' 
          disabled={isLoading || type === 'image/gif'}
        >
          Конвертировать
        </Button>
        <Button 
          onClick={() => dispatch(removeFile())} 
          variant='contained' 
          color='primary'
        >
          Удалить
        </Button>
      </Grid>
    </Grid>
  )
}