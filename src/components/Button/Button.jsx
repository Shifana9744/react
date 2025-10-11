import React from 'react'

const Button = (props) => {
  return (
    <button style={{color:'white',width: '150px',
      border: 'none',
      borderRadius: '8px',
      background: 'orange',
      height:'35px'}}>
      {props.content}
    </button>
  )
}

export default Button