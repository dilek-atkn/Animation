'use client'

import React from 'react'

const Logo = () => {
    return (
        <div className="logo flex justify-start w-6/12 text-2xl">
            <a href='/' className="flex flex-row">
                <div className="flex text-black mr-1">
                    <p id='o' className='text-[#a3c5db]'>O</p>
                    <p id='e' className='text-[#bf9a56]'>E</p>
                    <p id='v' className='text-[#e2001a]'>V</p>
                </div>
                <div className="text-black"> Digital Campus</div>
            </a>
        </div>
    )
}

export default Logo;
