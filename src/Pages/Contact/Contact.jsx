import React from 'react'

export default function Contact() {

  return (
    <div className='w-full h-full flex flex-col items-center'>
        <div className='w-[800px] flex flex-col'>
            <div className='place-self-center text-4xl my-16'>
                Get In Touch
            </div>

            <div className='flex flex-col w-full text-xl gap-y-12'>
                <div className='flex flex-col gap-y-4'>
                    <div className='font-bold'>
                        Edie Lehmann Boddicker
                    </div>
                    <div className='flex flex-row gap-4'>
                        <button>
                        ELBsing@AOL.com
                        </button>
                        <div>
                        818-990-5288 
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <div className='font-bold'>
                        Michael Lehmann Boddicker
                    </div>
                    <div className='flex flex-row gap-4'>
                        <button>
                        MBoddInc@gmail.com
                        </button>
                        <div>
                        818-430-0549
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <div className='font-bold'>
                        Mailing:
                    </div>
                    <div>
                        17328 Ventura Boulevard, Suite One
                    </div>
                    <div>
                        Encino, CA 91316-3904
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
