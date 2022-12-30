import React from 'react'

const labelInput = (props) => {
  return (
    <div className="flex  w-full flex-wrap py-1">
    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
      {props.label}
    </label>

    <input
      type="text"
      className="border-0 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
      defaultValue=  {props.inputvalue}
      placeholder =  {props.placeholder}
    />
  </div>
  )
}

export default labelInput