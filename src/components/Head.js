import React, { useState, useEffect } from 'react'
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON, YOUTUBE_SEARCH_API } from '../utilities/constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utilities/appSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();

    //make api call after 200ms - debouncing
    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-14 cursor-pointer' alt="menu" src={HAMBURGER_ICON} />
                <a href="/">
                    <img className='h-14 mx-2' alt="youtube-logo" src={YOUTUBE_ICON} />
                </a>
            </div>
            <div className='col-span-10 px-10'>
                <div>
                    <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} />
                    <button className='border border-gray-400 px-5 py-2 mt-1 rounded-r-full bg-gray-100'>Search</button>
                </div>
                {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border-gray-100'>
                    <ul>
                        {suggestions.map((suggestion) => (
                            <li className='py-2 px-3 shadow-sm hover:bg-gray-100'>{suggestion}</li>
                        ))}
                    </ul>
                </div>)}
            </div>
            <div className='col-span-1'>
                <img className='h-12' alt="user" src={USER_ICON} />
            </div>
        </div>
    )
};

export default Head;