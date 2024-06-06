import React from 'react'
import EntityCard from '../../Components/Entities/EntityCard'

export default function Entities() {

  return (
    <div className='w-full h-full flex flex-col items-center'>
        <div className='text-4xl font-medium mt-16'>
            The Lehmann Boddicker Group: Entities
        </div>
            
        <div className='flex flex-col items-start w-[800px] mt-16'>
            <EntityCard title={'LehBodInc'} site={'LehBodInc.com'} description={''} />
            <EntityCard title={'Sol7Post'} site={'Sol7Post.com'} description={''} />
            <EntityCard title={'Synthesizer Systems Technlogoies, Inc.'} site={'SSTsynths.com'} description={''} />
            <EntityCard title={'Synthplex LLC'} site={'Synthplex.com'} description={''} />
            <EntityCard title={'Edie Lehmann Boddicker (EML Productions)'} site={'EdieLehBod.com'} description={''} />
        </div>
    </div>
  )
}
