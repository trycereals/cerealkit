import React from 'react';
/** @jsx jsx */
import { jsx } from "theme-ui";

import { boxProps, boxPropsFn } from '../../../theme/boxProps'

import { Image as ThemeImage, Box } from 'theme-ui';

export default ({
  src = 'https://via.placeholder.com/300x180/0000FF/808080 ?Text=Digital.com',
  full = false,
  ...box
}) => (
  <Box
    sx={boxPropsFn({ ...boxProps, ...box, full })}
  >
    <ThemeImage sx={{ width: '100%', marginBottom: 2 }} src={src}/>
  </Box>
);