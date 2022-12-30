

import React from 'react'

const buttonFull = (props) => {
  return (
    <button
    className="my-4 bg-blue-500 text-white p-2 w-full font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
    type="Submit"   
  >
   {props.title}
  </button>
  )
}

export default buttonFull