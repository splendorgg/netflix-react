import cardData from './Cards'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function TitleCards() {
    return (
        <>
            <h2 className='next-watch' >Your Next Watch</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                className="mySwiper"
            >
                {cardData.map((card, index) => {
                    return <SwiperSlide key={index} >
                        <div className="card" >
                            <img src={card.image} className='swiper-img' />
                            <div className="swiper-info">
                                <p>{card.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
            <h2 >Hollywood Movies</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                className="mySwiper"
            >
                {cardData.map((card, index) => {
                    return <SwiperSlide key={index}>
                        <div className="card" >
                            <img src={card.image} className='swiper-img' />
                            <p>{card.title}</p>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
            <h2 >Stand-Up Comedy</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                className="mySwiper"
            >
                {cardData.map((card, index) => {
                    return <SwiperSlide key={index}>
                        <div className="card" >
                            <img src={card.image} className='swiper-img' />
                            <p>{card.title}</p>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
            <h2 >New on Netflix</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                className="mySwiper"
            >
                {cardData.map((card, index) => {
                    return <SwiperSlide key={index}>
                        <div className="card" >
                            <img src={card.image} className='swiper-img' />
                            <p>{card.title}</p>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}

export default TitleCards;