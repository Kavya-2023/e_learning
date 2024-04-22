import React from 'react'
import Cart from'../Cart'
import Register from '../Register';
const Enroll= () => {
    const user=localStorage.getItem("name")
  return (
    <div>
      {user ? (
        <Cart/>
      ):
      <Register/>
      }
    </div>
  )
}

export default Enroll;
