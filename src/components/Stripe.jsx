import React from 'react'

function Stripe({value}) {
  return (
    <div className='mt-16 w-[16.66%] border-zinc-600 border-t border-b border-r px-5 py-2 flex justify-between items-center '>
        <img src={value.url} className='w-28'/>
        <span className='font-medium text-sm'>{value.number}</span>
    </div>
  )
}

export default Stripe
