import { useEffect, useState } from 'react'
import axios from 'axios';
import PictureCard from './common/PictureCard';

const getFunnyPictures = async (): Promise<string[]> => {
    return axios.get('http://localhost:3000/funny-pictures')
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
    const [funnyPictures, setFunnyPictures] = useState<string[]>([])

    useEffect(() => {
        getFunnyPictures().then((res) => setFunnyPictures(res))
    }, [])

    return (
        <div className='funny-pictures-wrapper'>
            <h1 className='funny-pictures-title'>Funny</h1>
            <div id='list'>
                {
                    funnyPictures.length > 0
                    && funnyPictures.map((pic, idx) => <PictureCard key={idx} pic={pic} />)
                }
            </div>
        </div>
    )
}

export default LatestPictures
