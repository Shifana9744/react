import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <button style={{color:'white',width: '150px',
      border: 'none',
      radius: '8px',
      background: 'orange',
      height:'35px'}}>
      {props.content}
    </button>
  )
}

export default Button