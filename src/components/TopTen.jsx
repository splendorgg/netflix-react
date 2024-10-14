import topTenData from './TopTenCards'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


function TopTen({ title }) {
    return (
        <>
            <div className="topten-container">
                <h2 className="topten-header">{title}</h2>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="toptenSwiper"
                >
                    {topTenData.map((card, index) => {
                        return <SwiperSlide key={index}>
                            <div className="topten-swiper-container">
                                <span className='topten-numbers'>{index+1}</span>
                                <img src={card.image} className='topten-swiper-img' />
                            </div>
                        </SwiperSlide>
                    })}

                </Swiper>
            </div>
        </>
    )
}


export default TopTen