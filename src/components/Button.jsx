import React from 'react'

function Button({children}) {
  return (
    <div className='px-4 py-2 text-neutral-800 font-medium rounded-lg cursor-pointer bg-neutral-100'>{children}</div>
  )
}

export default Button