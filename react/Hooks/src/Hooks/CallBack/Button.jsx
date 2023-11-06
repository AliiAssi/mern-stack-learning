import React from 'react'

function Button({text,role}) {
  return (
    <>
    <button onClick={role}>{text}</button>
    </>
  )
}

export default Button
