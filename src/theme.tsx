import React from "react"
import { ThemeProvider } from "styled-components"


const theme = {
  fonts: {
    "family": "'Archivo, sans-serif;'"
  },
  colors: {
    "purple-800": "#1D1178",

  }
}


export const Theme = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>
      {children}
  </ThemeProvider>
)