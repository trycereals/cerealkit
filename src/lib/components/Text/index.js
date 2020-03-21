import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui";

import { Text, Heading, Box } from 'theme-ui'

import { boxProps, boxPropsFn } from '../../../theme/boxProps'

import {
  applyPControls,
  applyTitleControls,
  TitleControls,
  PControls
} from './controls'

import {
  ControlType,
  applyPropertyControls
} from "property-controls";


const P = ({
  children,
  text,
  textAlign = 'left',
  ...box
}) => (
  <Box>
    <Text sx={{ marginBottom: 3, fontSize: 3, textAlign }}>
      { text || children || PControls.text.defaultValue }
    </Text>
  </Box>
)

/** sx={boxPropsFn(Object.assign(boxProps, box))} */
const Title = ({
  children,
  text,
  textAlign = 'left',
  ...box
}) => (
  <Box >
    <Heading sx={{ marginBottom: 3, textAlign }}>
      { text || children || PControls.text.defaultValue}
    </Heading>
  </Box>
)

applyPControls(P)
applyTitleControls(Title)

export default {
  P,
  Title
}