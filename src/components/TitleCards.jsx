import cardData from './Cards'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
function TitleCards({ title }) {
    return (
        <>
            <div className="swiper-container">

                <h2 className='next-watch' >{title}</h2>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mahmutSwiper"
                >
                    {cardData.map((card, index) => {
                        return <SwiperSlide key={index} >
                            <div className="card">
                                <img src={card.image} className='swiper-img' />
                            </div>
                        </SwiperSlide>
                    })}

                </Swiper>

            </div>

        </>
    );
}

export default TitleCards;


