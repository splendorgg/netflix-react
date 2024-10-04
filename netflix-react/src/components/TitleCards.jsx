import cardData from './Cards'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from 'react';


function TitleCards({ title }) {
    const swiperRef = useRef(null)
    const slideLeft = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollLeft = swiperRef.current.scrollLeft - 550;
        }
    };

    const slideRight = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollLeft = swiperRef.current.scrollLeft + 550;
        }
    };

    return (
        <>
            <div className="swiper-container">

                <h2 className='next-watch' >{title}</h2>
                <MdChevronLeft className='slide-arrow-left' size={40} onClick={slideLeft} />
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    loop={true}
                    className="mySwiper"
                    ref={swiperRef}
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
                <MdChevronRight className='slide-arrow-right' size={40} onClick={slideRight} />
            </div>

            {/* <h2 >Hollywood Movies</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                className="mySwiper"
            >
                {cardData.map((card, index) => {
                    return <SwiperSlide key={index}>
                        <div className="card" >
                            <img src={card.image} className='swiper-img' />
                            <div className="swiper-info">
                                <p>{card.title}</p>
                            </div>
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
                            <div className="swiper-info">
                                <p>{card.title}</p>
                            </div>
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
                            <div className="swiper-info">
                                <p>{card.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper> */}
        </>
    );
}

export default TitleCards;