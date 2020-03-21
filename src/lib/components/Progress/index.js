import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from 'prop-types'
import { Progress as ThemeProgress, Box } from 'theme-ui'

import { boxProps, boxPropsFn } from '../../../theme/boxProps'

const Progress = ({
  current,
  alignSelf = 'flex-start',
  onClick,
  disabled,
  className,
  text,
  variant = 'primary',
  ...box
}) => (
  <Box
    sx={boxPropsFn({
      ...boxProps,
      ...box,
      ...{
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        width: '100%',
        padding: '8px'
      }
    })}
  >
    <ThemeProgress max={1} value={1} sx={{ m: 1 }} />
    <ThemeProgress max={1} value={1} sx={{ m: 1 }} />
    <ThemeProgress max={1} value={0} sx={{ m: 1 }} />
    <ThemeProgress max={1} value={0} sx={{ m: 1 }} />
  </Box>
)

export default Progress
