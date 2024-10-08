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
            </div>

            {/* <svg id="rank-1" width="2%" height="2%" viewBox="-20 0 70 154" class="svg-icon svg-icon-rank-1 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"></path></svg> */}
        </>
    );
}

export default TitleCards;