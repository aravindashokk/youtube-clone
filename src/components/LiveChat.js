import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utilities/chatSlice';
import { generateRandomName, generateRandomText } from '../utilities/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        
        const i = setInterval(() => {
            //API Polling
            console.log("API Polling");

            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomText(20),
            }));

        }, 500);

        return () => clearInterval(i);
    }, []);


    return (
        <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {chatMessages.map((c, index) => (<ChatMessage key={index} name={c.name} message={c.message} />))}
        </div>
    )
};

export default LiveChat;