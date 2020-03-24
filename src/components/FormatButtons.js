import React from 'react'
import { Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';


export default props => {
  const { type } = props;

  const children = [
    <ToggleButton key={1} value="image/gif" disableRipple={true}>
      gif
    </ToggleButton>,
    <ToggleButton key={2} value="video/mp4" disableRipple={true}>
      mp4
    </ToggleButton>,
    <ToggleButton key={3} value="video/webm" disableRipple={true}>
      webm
    </ToggleButton>,
  ]


  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup color="secondary" size="medium" exclusive >
          {children}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  )
}