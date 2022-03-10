import React from 'react';
import '../../Header/MyNavbar.css'
import Video from '../../Image/rolex-and-cinema-2021-first-datejust.mp4'

const BackgroundDefault = () => {

    return (
        // <div >
        <video className='bgLogin' autoPlay muted loop>
            <source src={Video} type='video/mp4'/>
        </video>
        // </div>
    );
};

export default BackgroundDefault;