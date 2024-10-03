import cardData from './Cards'

function TitleCards() {
    /*   const cardsRef = useRef()
      const handleWheel = (event) => {
          event.preventDefault
          cardsRef.current.scrollLeft += event.deltaY
      }
      useEffect(() => {
          cardsRef.current.addEventListener('wheel', handleWheel)
      }, [])
   */
    return (
        <div className="title-card-container">
            <h2>Your Next Watch</h2>
            <div className="slider-wrapper">
                <div className="slider" >
                    {cardData.map((card, index) => {
                        return <div className="card" key={index}>
                            <img src={card.image} />
                            <p>{card.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default TitleCards;