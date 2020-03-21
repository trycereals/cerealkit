import React from 'react';
/** @jsx jsx */
import { jsx } from "theme-ui";

import { boxProps, boxPropsFn } from '../../../theme/boxProps'

import ReactPlayer from 'react-player';

import { Box } from 'theme-ui';

export default ({
  src = 'https://www.youtube.com/watch?v=rTBryOTpOjI&ab_channel=Gr%C3%BCnt',
  full = true,
  mb = 3,
  minHeight = '30vh',
  playing = false,
  setPlaying = function() { return null },
  global = false,
  controls = false,
  ...box
}) => {
 return (
   <Box sx={boxPropsFn({ ...boxProps, ...box, full, mb, minHeight, position: 'relative' })}>
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute'
      }}
      onClick={() => setPlaying(!playing, global)}
    />
    <ReactPlayer
      style={{ tabIndex: '-1' }}
      width="100%"
      height="100%"
      url={src}
      controls={controls}
      playing={playing}
    />
  </Box>
 )
}