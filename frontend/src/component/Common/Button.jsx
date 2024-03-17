import React from 'react'

function Button(props) {
  return (
    <>
         <button
                type={props.type}
                className="w-full bg-[#009c86] py-3 text-center text-white"
                >
                {props.text}
              </button>
    </>
  )
}

export default Button
