import React from 'react'

const Heading = (props) => {
  return (
    <div className='mx-auto text-center' style={{width:'max-content'}}>
        <h2 className='' style={{fontWeight:'bold',fontSize:'40px'}}>
          <span style={{fontSize:'40px',color:'orange'}}>{props.highlight}</span> {props.heading}</h2>
        <div className='w-50 mt-3 ms-auto' style={{height:'2px',backgroundColor:'orange'}}></div>
      </div>
  )
}

export default Heading