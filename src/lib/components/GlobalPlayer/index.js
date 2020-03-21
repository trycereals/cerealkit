import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import { boxProps, boxPropsFn } from '../../../theme/boxProps'

const GlobalPlayer = ({
  children,
  alignSelf = 'flex-start',
  onClick,
  disabled,
  className,
  text,
  variant = 'primary',
  onClose = function() {},
  onPlayOrPause = function() {},
  onPause = function() {},
  onBack = function() {},
  ...box
}) => (
  <Box
    sx={boxPropsFn({
      ...boxProps,
      ...box,
      ...{
        position: 'fixed',
        bottom: '0',
        left: '0',
        display: 'flex',
        width: '100%',
        padding: '16px',
        bg: '#FFF',
        color: '#111'
      }
    })}
  >
    <Box
      sx={{
        margin: 'auto',
        width: '360px',
        display: 'flex',
        justifyContent: 'space-between',
        p: 2
      }}
    >
      <a>back</a>
      <a>Play</a>
      <a>Pause</a>
      <a onClick={onClose}>Close</a>
    </Box>
  </Box>
)

export default GlobalPlayer
