import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { setMethod } from '../redux/actions/actions';

export default props => {
  const { type } = props
  const dispatch = useDispatch()

  const handleFormat = (event, newAlignment) => {
    event.persist()

    if (newAlignment !== null) {
      dispatch(setMethod(newAlignment))
    }
  }

  const formats = ['image/gif', 'video/mp4', 'video/webm']
  .map((elem, id) => {
    if (elem === type) return(
      <ToggleButton key={id}  value={elem} disableRipple={true} disabled>
        {elem}
      </ToggleButton>
    )

    return (
      <ToggleButton key={id} value={elem} disableRipple={true}>
        {elem}
      </ToggleButton>
    )
  })

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup value={null} onChange = {handleFormat} color="secondary" size="medium" exclusive >
          {formats}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  )
}