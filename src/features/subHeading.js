

import React from 'react'

const SubHeading = (props) => {
  return (
    <h1 className="items-center flex border-b-2 mx-auto mb-2 border-blue-500  text-xl justify-center ">
    {props.title}
  </h1>
  )
}

export default SubHeading