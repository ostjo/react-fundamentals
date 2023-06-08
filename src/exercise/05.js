// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({style, size, ...props}) => {
  const boxSizeClass = size ? `box--${size}` : ''

  return (
    <div
      {...props}
      style={{fontStyle: 'italic', ...style}}
      className={`box ${boxSizeClass}`}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)
const otherBox = <Box>other box without size or style</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {otherBox}
    </div>
  )
}

export default App
