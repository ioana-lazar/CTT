import { useEffect, useState } from 'react'
import axios from 'axios';
import PictureCard from './common/PictureCard';

const getLatestPictures = async (): Promise<string[]> => {
    return axios.get('http://localhost:3000/latest-pictures')
        .then((res) => {
            if (res.status === 200 && res.data && Array.isArray(res.data)) {
                const decodedArray = res.data.map(base64String => atob(base64String));
                return decodedArray;
            }
            return []
        })
        .catch((err) => {
            console.error('Error:', err.message);
            return []
        })
}

const LatestPictures = () => {
    const [latestPictures, setLatestPictures] = useState<string[]>([])

    useEffect(() => {
        getLatestPictures().then((res) => setLatestPictures(res))
    }, [])

    return (
        <div className='latest-pictures-wrapper'>
            <h1 className='latest-pictures-title'>Most Recent</h1>
            <div id='list'>
                {
                    latestPictures.length > 0
                    && latestPictures.map((pic, idx) => <PictureCard key={idx} pic={pic} />)
                }
            </div>
        </div>
    )
}

export default LatestPictures
