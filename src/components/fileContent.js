import React, { useRef } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVideoParams } from '../redux/actions/actions';


export default () => {
  const { url, type } = useSelector(state => state.file);
  const dispatch = useDispatch()
  const videoRef = useRef(null)

  const getParams = () => {
    const { videoWidth, videoHeight, duration } = videoRef.current
    dispatch(addVideoParams(videoWidth, videoHeight, Math.floor(duration)))
  }

  return(
    <React.Fragment>
      {
        type === 'image/gif'
          ?
          <img style={{ maxWidth: '400px', maxHeight: '400px' }} src={url} alt='your gif' />
          :
          <video onCanPlay={getParams} ref={videoRef} style={{ maxWidth: '400px', maxHeight: '400px' }} src={url} autoPlay loop controls />
      }
    </React.Fragment>
  )
}