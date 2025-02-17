import React from 'react';
import {USER_ICON} from "../utilities/constants";

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg my-2'>
            <img className='w-8 h-8' alt='user' src={USER_ICON} />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment;