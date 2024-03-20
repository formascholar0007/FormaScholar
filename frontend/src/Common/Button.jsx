import React from 'react'

function Button(props) {
  return (
    <>
         <button
                type={props.type}
                className="flex w-full justify-center rounded-md bg-[#009c86] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0d665a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                {props.text}
              </button>
    </>
  )
}

export default Button
