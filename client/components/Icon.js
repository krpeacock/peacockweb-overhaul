import React from 'react'

const icons = {
  'play-right': "M192 128l640 384-640 384z",
  'play-left': "M832 896l-640-384 640-384z"
}

export default (props) => (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </svg>
)