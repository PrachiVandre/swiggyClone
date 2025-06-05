import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='wrap'>
      <div className='contacts'>
        <h1 role="heading">Contact</h1>
        <input type="text" placeholder='name'/>
        <input type="text" placeholder='message'/>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact