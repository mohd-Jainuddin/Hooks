import React, { useState } from 'react'

const UseState = () => {

    const [msg, setMsg] = useState('hello Jainuddin');

    const handleClick = ()=> {
        setMsg('Today I learn useState')
    }
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseState
