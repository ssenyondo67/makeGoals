import React from 'react'

function Spinner() {
  return (
    <div className='spinnner-container w-16 h-8 border-black bg-white flex items-center p-1 text-black' >
       <svg className="animate-spin bg-black  " viewBox="0 0 24 24">   
       </svg>
       <span>Loading</span>
    </div>
  )
}

export default Spinner