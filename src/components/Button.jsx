import React from 'react'

function Button({children}) {
  return (
    <div className='px-4 py-2 rounded-lg cursor-pointer bg-neutral-800'>{children}</div>
  )
}

export default Button