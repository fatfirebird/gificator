import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core/'
import { Alert } from '@material-ui/lab';
import FileBox from './components/FileBox'
import Conventor from './components/Convertor'
import { AppState } from './redux/reducers/rootReducer';

export default () => {
  const error = useSelector((state: AppState) => state.error);
  const fileIsLoaded = useSelector((state: AppState) => state.file.type);
  const { isError, message } = error;

  return (
    <Container maxWidth="sm">
      {isError && <Alert variant="filled" severity="error">{message}</Alert>}
      <Typography variant='h2' align='center' gutterBottom>Конвертор</Typography>
      {fileIsLoaded ? <Conventor /> : <FileBox />}
    </Container>
  )
}
