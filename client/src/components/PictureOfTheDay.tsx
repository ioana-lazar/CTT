import { useEffect, useState } from 'react'
import axios from 'axios';

const getPictureOfTheDay = async (): Promise<string> => {
    return axios.get('http://localhost:3000/picture-of-the-day')
        .then((res) => {
            if (res.status === 200 && res.data) {
                const imageUrl = atob(res.data.image_data);

                return imageUrl
            }
            return '';
        })
        .catch((err) => {
            console.error('Error:', err.message);
            return ''
        })
}

const PictureOfTheDay = () => {


    const [pictureOfTheDay, setPictureOfTheDay] = useState<string>('');

    useEffect(() => {
        getPictureOfTheDay().then(res => setPictureOfTheDay(res))
    }, [])

    return (
        <div className='pic-of-the-day-wrapper'>
            <div className='pic-of-the-day-img-wrapper'>
                <img
                    className='pic-of-the-day-img'
                    src={pictureOfTheDay}
                />
            </div>
        </div>
    )
}

export default PictureOfTheDay
