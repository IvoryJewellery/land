import React from 'react'
import video from '../images/Ivory_video.mp4'

import '../styles/ComingSoon.css';
export default function Video() {
    return (
         <div>
            
        <video preload autoPlay loop muted playsinline controls className="video" alt="Ivory Jewellery" src={video}/>
        </div>
    );
}

