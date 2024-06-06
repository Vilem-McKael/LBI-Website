import React from 'react'

export default function EntityCard({title, site, description}) {

    const handleOnClick = (link) => {
        window.open('https://www.' + link, '_blank', 'noopener,noreferrer')
    }

  return (
    <div className='flex flex-col gap-y-2 mb-8'>
        <div className='flex flex-row items-end text-2xl'>
            <div className='font-medium mr-4'>
                {title}
            </div>
            <button className='text-xl' onClick={() => handleOnClick(site)}>
                {site}
            </button>
        </div>
        <div className='text-sm'>
            {description}
        </div>
    </div>
  )
}
