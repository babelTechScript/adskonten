import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Shorts() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/search`, {
        params: {
          part: 'snippet',
          channelId: 'UCq8tikfU-AE2GpbZF6YPQag',
          maxResults: 10,
          order: 'date',
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
        },
      })
      .then((result) => {
        console.log(result.data.items);
        setVideos(result.data.items);
      });
  }, []);
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {videos.map((item, index) => {
        return (
          <div className='card w-96 bg-base-100 shadow-xl' key={index}>
            <a href={`https://www.youtube.com/shorts/${item.id.videoId}`}>
              <figure>
                <img
                  src={item.snippet.thumbnails.high.url}
                  alt={item.snippet.title}
                />
              </figure>
            </a>
          </div>
        );
      })}
    </div>
  );
}
