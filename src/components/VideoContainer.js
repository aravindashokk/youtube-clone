import React, { useState, useEffect } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utilities/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
      {videos && videos.map(video => <Link key={video.id} to={"/watch?v="+video.id} ><VideoCard className="cursor-pointer"  info={video} /></Link>)}

    </div>
  )
};

export default VideoContainer;