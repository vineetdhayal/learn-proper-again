import React, { useState } from 'react';
import './carousel.css';

const Carousel = () => {
    const images: any = [
        {
            src: 'https://picsum.photos/id/600/600/400',
            alt: 'Forest',
        },
        {
            src: 'https://picsum.photos/id/100/600/400',
            alt: 'Beach',
        },
        {
            src: 'https://picsum.photos/id/200/600/400',
            alt: 'Yak',
        },
        {
            src: 'https://picsum.photos/id/300/600/400',
            alt: 'Hay',
        },
        {
            src: 'https://picsum.photos/id/400/600/400',
            alt: 'Plants',
        },
        {
            src: 'https://picsum.photos/id/500/600/400',
            alt: 'Building',
        },
    ];
    const [index, setindex] = useState(0);
    return (
        <div className='main'>
            <img src={images[index].src}></img>
            <button className='prev' onClick={()=>setindex((index) => index - 1)}>Prev</button>
            <button className='next' onClick={()=>setindex((index) => index + 1)}>Next</button>
            <div className='flex'>
                {images.map((x, idx) => {
                    return <div key={idx} className={index === idx ? 'circle active' : 'circle'}></div>
                })}
            </div>
        </div>
    )
}

export default Carousel
