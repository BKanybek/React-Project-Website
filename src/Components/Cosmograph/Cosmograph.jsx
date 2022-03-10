// import { Container } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import BackgroundDefault from '../Image/BackgroundDefault/BackgroundDefault';


const Cosmograph = () => {
    return (

            <div style={{marginTop: '100px'}}>
                <BackgroundDefault />
                <div style={{ backgroundVideo: "url('../../Image/homepage_cosmograph_daytona_m116503-0004_0001.mp4')" , color: 'white', backgroundAttachment: 'scroll', width: '100%', height: '100vh'}}>
                    <h2 style={{ fontFamily: "sans-serif", color: 'white', fontSize:"50px", textAlign: 'center', padding: '100px 0px 20px', margin: '0px', position: 'relative', zIndex: '40' }}>Cosmograph Daytona</h2>
                    <h4 style={{ fontFamily: "sans-serif", color: 'white', fontSize:"25px", textAlign: 'center', padding: '0px 10px 0px 10px', margin: '0px', position: 'relative', zIndex: '40' }}>СОЗДАННЫЕ СПЕЦИАЛЬНО ДЛЯ ГОНОК</h4>
                </div>
                <div style={{ backgroundImage: "url('https://content.rolex.com/dam/watches/family-pages/cosmograph-daytona/professional-watches-cosmograph-daytona-search_m116518ln_0040_1706jva_001_r.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'revert', height: '1100px', width: '100%' }}>
                    <h2 style={{ fontFamily: "sans-serif", color: 'white', fontSize:"50px", padding: '70px', margin: '0px' }}>Часы Oyster Perpetual Cosmograph Daytona — эталон часов для страстных автолюбителей, одержимых скоростью.</h2>
                    <p style={{fontFamily: "sans-serif", color: 'white', fontSize: "20px", padding: '0px 70px', margin: '0px', }} >Представленные в 1963 году часы Cosmograph Daytona были созданы для профессиональных автогонщиков. Название и функции этих легендарных часов однозначно указывают на их принадлежность к миру автомобильного спорта. На протяжении более 50 лет с момента своего создания модель Cosmograph Daytona постоянно развивалась, оставаясь уникальной в своем роде и непревзойденной среди спортивных хронографов.</p>
                </div>

                <div>
                    <img style={{width:'100%', height: '100vh'}}src="https://content.rolex.com/dam/watches/family-pages/cosmograph-daytona/professional-watches-daytona-race_dayt13sc_0002.jpg?imwidth=2880" alt="photo" />
                </div>

                <div>
                    <img style={{width:'100%', height: '100vh'}}src="https://content.rolex.com/dam/watches/family-pages/cosmograph-daytona/professional-watches-cosmograph-daytona-beauty_m116500ln-0001_1601ac_004.jpg?imwidth=2880" alt="photo" />
                </div>

                {/* <div style={{ backgroundColor:'pink', padding: '100px 250px 40px 250px', margin: '0px' }}>
                    Slider симетрия и баланс
                </div> */}

                <video autoPlay muted loop style={{ width:'100%', height:'100vh', position:'center', padding: '0px' }} src="https://content.rolex.com/dam/watches/family-pages/cosmograph-daytona/video/the-rolex-way/professional-watches-cosmograph-daytona-rolex-way-video-2020_rolex_daytona_film-hd_verti-no_logo.mp4"></video> 
                <video autoPlay muted loop style={{ width:'100%', height:'100vh', position:'center', padding: '0px' }} src="https://content.rolex.com/dam/watches/family-pages/cosmograph-daytona/video/professional_watches_cosmograph_daytona_video_autoplay_0001.mp4" type="video/mp4"></video>

                <div style={{ backgroundImage: "url('https://content.rolex.com/dam/watches/family-pages/cosmograph-daytona/professional-watches-cosmograph-daytona-carte-blanche_m116500ln-0001_201705rg_001_portrait.jpg?imwidth=420')", backgroundSize: '1050px 900px', backgroundPosition: 'center', width: '100%', height:'120vh'}}>
                    <p style={{fontFamily: "sans-serif", color: 'white', fontSize:"20px", lineHeight: '1.7', padding: '100px 250px 40px 250px', margin: '0px' }}>Часы Cosmograph Daytona неразрывно связаны с миром автомобильных гонок. Они позволяют пилотам гоночных болидов замерять время и считывать скорость на тахиметрической шкале безеля, которая является отличительной особенностью данной модели. Часы названы в честь города Дейтона в штате Флорида, где в начале XX века зародилась любовь к автогонкам и страсть к скорости. Название отражает особые связи, в том числе и исторические, между Rolex и миром автомобильного спорта, которые еще более укрепились в 2013 году, когда часовая марка заключила сотрудничество с Formula 1® в качестве Глобального партнера и Официальных часов.</p>  
                </div>

                <video autoPlay muted loop style={{ width:'100%', height:'100vh', position:'center', padding: '0px' }}src="https://content.rolex.com/dam/watches/family-pages/cosmograph-daytona/video/professional_watches_cosmograph_daytona_tbt_0001_1920x1080.mp4"></video>

                <div style={{ backgroundColor: 'lightGrey', width: '100%', height:'100vh'}}>
                    <p style={{fontFamily: "sans-serif", fontSize:"25px", lineHeight: '1.7', textAlign: 'center'}}>Связаться 
                    с дистрибьютором по вопросам о модели Cosmograph Daytona</p>
                    <p style={{fontFamily: "sans-serif", fontSize:"20px", textAlign: 'center', padding: '0px 250px 250px 250px', margin: '0px' }}>Продавать часы Rolex разрешено только официальным дистрибьюторам Rolex. Располагая необходимыми знаниями и умениями, они помогут Вам сделать правильный выбор на всю жизнь.</p>
                    

                </div> 
                
            </div>
            
     
    );
};

export default Cosmograph;
