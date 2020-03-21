import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from 'prop-types'
import { Button as ThemeButton, Box } from 'theme-ui'

import { boxProps, boxPropsFn } from '../../../theme/boxProps'

import { ControlType, applyPropertyControls } from "property-controls";

const Button = ({
  children,
  alignSelf = 'flex-start',
  onClick,
  disabled,
  className,
  text,
  variant = 'primary',
  ...box
}) => (
  <Box
    sx={boxPropsFn({ ...boxProps, ...box, alignSelf })}
  >
    <ThemeButton
      sx={{ variant: 'buttons.secondary', marginBottom: 3 }}>
      { text || children }
    </ ThemeButton>
  </Box>
)

applyPropertyControls(Button, {
  text: {
    type: ControlType.String,
    required: true,
    placeholder: 'Enter a title...'
  }
});

Button.propTypes = {
  onClick: PropTypes.func,
  /** Disable the button */
  disabled: PropTypes.bool,
  /** well, className */
  className: PropTypes.string,
  /** Text of the button */
  text: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null
}

Button.usage = `
  <Button text="I am a button" />
`

export default Button
