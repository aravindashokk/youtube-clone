import React from 'react'
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON } from '../utilities/constants';

const Head = () => {
    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-14' alt="menu" src={HAMBURGER_ICON} />
                <img className='h-14 mx-2' alt="youtube-logo" src={YOUTUBE_ICON} />
            </div>
            <div className='col-span-10 px-10'>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
                <button className='border border-gray-400 px-5 py-2 mt-1 rounded-r-full bg-gray-100'>Search</button>
            </div>
            <div className='col-span-1'>
                <img className='h-12' alt="user" src={USER_ICON} />
            </div>
        </div>
    )
};

export default Head;