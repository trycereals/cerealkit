import React from "react"

import theme from './index.json'
import { ThemeProvider } from 'theme-ui'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator