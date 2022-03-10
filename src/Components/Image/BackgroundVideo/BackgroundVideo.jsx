import React from 'react';
import '../../Header/MyNavbar.css'
import Video from '../../Image/homepage_cosmograph_daytona_m116503-0004_0001.mp4'
import { Link } from 'react-router-dom';

const BackgroundVideo = () => {
    return (
      <Link to='#'>
            <div className='bgMask'>
              <div className='bgNavbar'>
                <video className='bgVideo' autoPlay muted loop src={Video} type='video/mp4'></video>
              </div>
              <div className='introInfo'>
                <div className='container'>
                  <h1 className='intro__title' style={{fontSize: '35px'}}>COSMOGRAPH DAYTONA</h1>
                  <h2 className='intro__title__two'>СОЗДАННЫЕ СПЕЦИАЛЬНО ДЛЯ ГОНОК</h2>
                </div>
              </div>
            </div>
      </Link>

    );
};

export default BackgroundVideo;

