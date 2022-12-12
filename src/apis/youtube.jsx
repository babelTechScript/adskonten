import axios from 'axios';
const KEY = 'AIzaSyDm0pqgvfATYZ2b5E8T-2sqrV2pA1qRV4c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    channelId: 'UCq8tikfU-AE2GpbZF6YPQag',
    maxResults: 10,
    key: KEY,
  },
});
