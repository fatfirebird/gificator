import React from 'react';
import { Container, Typography } from '@material-ui/core/'

import FileBox from './components/FileBox'

export default () => {
  return (
    <Container maxWidth="sm">
      <Typography variant='h2' align='center' gutterBottom>Конвертор</Typography>
      <FileBox />
    </Container>
  )
}
