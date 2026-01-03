import React from 'react'

const Navbar = () => {
  const addNumber = () => {
    const a = 10;
    const b = 20;
    return a + b;
  }

  return (
    <div>
      {addNumber()}
    </div>
  )
}

export default Navbar
