


import React from 'react'

export const Heading = (props) => {
  return (
    <div className="  mx-auto  p-auto flex justify-center items-center ">
    <h2 className="text-2xl mb-1 border-b-4 border-blue-500  p-2  uppercase">{props.title}</h2>{" "}
  </div>
  )
}

export default Heading